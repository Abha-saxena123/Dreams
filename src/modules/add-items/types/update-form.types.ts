import { DreamDetailsProps } from "../../details-page/types/dream-details";

export interface FormDataInterface {
  title: string;
  description: string;
  remarks?: string;
  experience?: string;
}

export interface AddDreamServieProps {
  payload: FormDataInterface;
  user: string;
}
