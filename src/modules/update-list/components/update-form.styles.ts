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