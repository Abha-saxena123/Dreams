import { UpdateItemFrom } from "./add-dream-form";
import { FormWrapper, SideImage, FormContainer } from "./add-dream.styles";

export const AddDream: React.FC = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <UpdateItemFrom />
      </FormContainer>
    </FormWrapper>
  );
};

