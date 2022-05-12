import { UpdateItemFrom } from "./update-form";
import { FormWrapper, SideImage, FormContainer } from "./update.styles";

export const UpdateItemList: React.FC = () => {
  return (
    <FormWrapper>
      <SideImage />
      <FormContainer>
        <UpdateItemFrom />
      </FormContainer>
      <SideImage />
    </FormWrapper>
  );
};

