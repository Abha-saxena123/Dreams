import { ObjectId } from "mongodb";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface Users {
  firstName: string;
  lastName: string;
  _id: ObjectId;
}

export interface BucketListProps {
  _id: ObjectId;
  description: string;
  experience: string;
  firstName: string;
  remarks: string;
  title: string;
}
