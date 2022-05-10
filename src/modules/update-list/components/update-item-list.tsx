import styled from "styled-components";
import { UpdateItemFrom } from "./update-form";

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

const SideImage = styled.div`
  width: 200px;
  height: 100vh;
  border-right: 2px solid darkcyan;
  border-left: 2px solid darkcyan;
  background-image: url(list-side-image.jpg);
  background-size: contain;
`;

const FormWrapper = styled.div`
  display: flex;
`;

const FormContainer = styled.div`
  flex-grow: 1;
`;
