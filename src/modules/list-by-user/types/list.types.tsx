export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface BucketListProps {
  users: string[];
  items: { id: number; value: string }[][];
}
