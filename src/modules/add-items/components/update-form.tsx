import { useForm } from "react-hook-form";
import { DreamDetailsProps } from "../../details-page/types/dream-details";
import { useAddDream } from "../hooks/use-add-items";
import {
  AddDreamServieProps,
  FormDataInterface,
} from "../types/update-form.types";
import {
  UpdateFormWrapper,
  StyledInput,
  FormSubmitButton,
} from "./update.styles";

export const UpdateItemFrom: React.FC = () => {
  const { register, handleSubmit } = useForm();


  const { mutate: updateItems, isError: isError, error, reset } = useAddDream();

  const onSubmit = async (payload: AddDreamServieProps): Promise<void> => {
    reset();
    updateItems(payload, { onSuccess });
  };

  const onSuccess = () => {
    // refetch();
  };

  return (
    <UpdateFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        id="outlined-basic"
        label="FirstName"
        variant="outlined"
        {...register("firstName")}
      />
      <StyledInput
        id="outlined-basic"
        label="Title"
        variant="outlined"
        {...register("title")}
      />
      <StyledInput
        id="outlined-basic"
        label="Description"
        variant="outlined"
        {...register("description")}
      />
      <StyledInput
        id="outlined-basic"
        label="Remarks"
        variant="outlined"
        {...register("remarks")}
      />
      <FormSubmitButton type="submit">Add</FormSubmitButton>
    </UpdateFormWrapper>
  );
};
