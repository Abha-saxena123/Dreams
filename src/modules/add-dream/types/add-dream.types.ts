
export interface FormDataInterface {
  title: string;
  description: string;
  remarks?: string;
  experience?: string;
   isDone: boolean
}

export interface AddDreamServiceProps {
  payload: FormDataInterface;
  firstName: string;
}
