import { UpdateItemFrom } from "./update-form";
import { FormWrapper, SideImage, FormContainer } from "./update.styles";

export const UpdateItemList: React.FC = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <UpdateItemFrom />
      </FormContainer>
    </FormWrapper>
  );
};

