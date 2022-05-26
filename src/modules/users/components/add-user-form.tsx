import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Users } from "../../dream-list/types/dream-list.types";
import { useAddUser } from "../hooks/use-add-user";
import {
  AddUserFormWrapper,
  AddUserStyledInput,
  AddUserFormSubmitButton,
  AddUserPassword
} from "./add-user.styles";

export const AddUserFrom: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: addUser, isError: isError, error } = useAddUser();

  const onSubmit = async (payload: Users): Promise<void> => {
    addUser(payload, { onSuccess });
  };

  const onSuccess = () => {
    // refetch();
    reset();
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
    <AddUserFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <AddUserStyledInput
        required
        id="firstName"
        label="FirstName"
        variant="outlined"
        {...register("firstName")}
      />
      <AddUserStyledInput
        required
        id="lastName"
        label="LastName"
        variant="outlined"
        {...register("lastName")}
      />
      <AddUserPassword variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
      <AddUserFormSubmitButton type="submit">Add</AddUserFormSubmitButton>
    </AddUserFormWrapper>
  );
};
