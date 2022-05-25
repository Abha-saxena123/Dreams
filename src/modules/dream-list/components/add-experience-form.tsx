import { ObjectId } from "mongodb";
import { useForm } from "react-hook-form";
import {
  FormSubmitButton,
  UpdateFormWrapper,
} from "../../add-dream/components/add-dream.styles";
import { useUpdateDream } from "../hooks/use-dream-update";
import { UpdateForm, StyledExperienceInput } from "./dream-list.styles";

interface MarkItDoneFormProps {
  id: ObjectId;
  isDone: boolean;
  refetch: () => void;
}

export const MarkItDoneFrom: React.FC<MarkItDoneFormProps> = ({
  id,
  isDone,
  refetch,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const { mutate: updateDream, error } = useUpdateDream();

  const onSubmit = async (payload: any): Promise<void> => {
    reset();
    updateDream(
      { _id: id, isDone: !isDone, ...payload },
      { onSuccess, onError }
    );
    closeForm();
  };

  const onSuccess = () => {
    reset();
    refetch();
  };

  const onError = () => {
    throw error;
  };

  const closeForm = () => {
    (document.getElementById("markDonePopup") as HTMLElement).style.display =
      "none";
  };

  window.onclick = function (event) {
    let modal = document.getElementById("markDonePopup");
    if (event.target == modal) {
      closeForm();
    }
  };

  return (
    <UpdateFormWrapper id="markDonePopup">
      <UpdateForm onSubmit={handleSubmit(onSubmit)}>
        <StyledExperienceInput
          id="markDoneInput"
          label="Experience"
          variant="outlined"
          multiline
          {...register("experience")}
        />
        <FormSubmitButton type="submit">Submit</FormSubmitButton>
      </UpdateForm>
    </UpdateFormWrapper>
  );
};
