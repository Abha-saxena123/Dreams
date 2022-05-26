import { useForm } from "react-hook-form";
import { FormWrapper, FormSubmitButton, FormContainer } from "./form.styles";

interface FormProps {
  onSubmit: () => void;
  submitBtnTxt?: string;
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  submitBtnTxt,
  children,
}) => {
  return (
    <FormContainer>
      <FormWrapper onSubmit={onSubmit}>
        {children}
        <FormSubmitButton type="submit">
          {submitBtnTxt ? submitBtnTxt : "Submit"}
        </FormSubmitButton>
      </FormWrapper>
    </FormContainer>
  );
};
