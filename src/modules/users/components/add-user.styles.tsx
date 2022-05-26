import { Button, FormControl, TextField } from "@material-ui/core";
import styled from "styled-components";

export const AddUserFormWrapper = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const AddUserStyledInput = styled(TextField)`
  margin: 10px !important;
`;

export const AddUserPassword = styled(FormControl)`
margin: 10px !important;
`;

export const AddUserFormSubmitButton = styled(Button)`
  background-color: darkcyan !important;
  margin 10px !important;
`;


export const FormWrapper = styled.div`
  display: flex;
`;

export const FormContainer = styled.div`
  flex-grow: 1;
`;