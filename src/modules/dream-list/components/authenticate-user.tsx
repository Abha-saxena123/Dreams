import { ChangeEvent, useState } from "react";
import {
  ListTabContainer,
  ListTab,
  StyledInputLabel,
} from "./dream-list.styles";
import { Users } from "../types/dream-list.types";
import { Form } from "../../common/components/form/form";
import { StyledInput } from "../../common/components/form/form.styles";
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { AddUserPassword } from "../../users/components/add-user.styles";
import { useForm } from "react-hook-form";

interface AuthenicaterUserPageProps {
  userName: string;
  oldPassword: string;
  setShowList: (x: boolean) => void;
}

export const AuthenicateUser: React.FC<AuthenicaterUserPageProps> = ({
  userName,
  oldPassword,
  setShowList,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleChange = (payload: any) => {
    const { password } = payload;
    if (password === oldPassword) {
      setShowList(true);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit(handleChange)}>
      <StyledInputLabel>UserName</StyledInputLabel>
      <StyledInput
        required
        id="userName"
        variant="outlined"
        value={userName}
        disabled
      />
      <AddUserPassword variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          required
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          {...register("password")}
        />
      </AddUserPassword>
    </Form>
  );
};
