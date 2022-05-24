export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}



export interface Users {
  firstName: string;
  lastName: string;
  id: number;
  // dreams: string[];
}

export interface BucketListProps {
  users: Users[];
  items: { id: number; value: string }[][];
}
