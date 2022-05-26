import { AddUserFrom } from "./add-user-form";
import { FormWrapper, FormContainer } from "./add-user.styles";

export const AddUser: React.FC = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <AddUserFrom />
      </FormContainer>
    </FormWrapper>
  );
};

