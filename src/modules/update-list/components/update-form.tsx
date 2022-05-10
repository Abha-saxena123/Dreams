import { useForm } from "react-hook-form";
import { UpdateFormWrapper, StyledInput, FormSubmitButton } from "./update-form.styles";

interface FormDataInterface {
  header: string;
  description: string;
  remarks?: string;
}

export const UpdateItemFrom: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FormDataInterface) => {
    console.log("data", data);
  };

  return (
    <UpdateFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        id="outlined-basic"
        label="Header"
        variant="outlined"
        {...register("Header")}
      />
      <StyledInput
        id="outlined-basic"
        label="Description"
        variant="outlined"
        {...register("Description")}
      />
      <StyledInput
        id="outlined-basic"
        label="Remarks"
        variant="outlined"
        {...register("Remarks")}
      />
      <FormSubmitButton type="submit">Add</FormSubmitButton>
    </UpdateFormWrapper>
  );
};


