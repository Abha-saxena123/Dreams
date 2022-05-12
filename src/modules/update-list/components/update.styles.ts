import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const UpdateFormWrapper = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(TextField)`
  margin 10px !important;
`;

export const FormSubmitButton = styled(Button)`
  background-color: darkcyan !important;
  margin 10px !important;
`;

export const SideImage = styled.div`
  width: 200px;
  height: 100vh;
  border-right: 2px solid darkcyan;
  border-left: 2px solid darkcyan;
  background-image: url(list-side-image.jpg);
  background-size: contain;
`;

export const FormWrapper = styled.div`
  display: flex;
`;

export const FormContainer = styled.div`
  flex-grow: 1;
`;