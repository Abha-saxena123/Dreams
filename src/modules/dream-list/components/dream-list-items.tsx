import Link from "next/link";
import { BucketListProps, Users } from "../types/dream-list.types";
import { TabPanel } from "../helpers/dream-list.helper";
import {
  ListTabContainer,
  ListValueContainer,
  ListValueWrapper,
  AddItemLink,
  AddLinkWrapper,
  ListItemWrapper,
  ListTrophy,
} from "./dream-list.styles";
import { Typography } from "../../common/components/typography/typography";
import { FontType } from "../../common/utils/constants/typography.constants";
import { useDreamList } from "../hooks/use-dream-list";
import { RoundedCornerRounded } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { ObjectId } from "mongodb";
import { useUpdateDream } from "../hooks/use-dream-update";

export const DreamListItems: React.FC<{
  user: Users[];
  value: number;
}> = ({ user, value }) => {
  const { data, isLoading, refetch } = useDreamList(user[value].firstName);
  const {
    mutate: updateDream,
    isError: isError,
    error,
    reset,
  } = useUpdateDream();

  if (isLoading) {
    return <>Loading...</>;
  }

  const handleClick = (_id: ObjectId, isDone: boolean) => {
    console.log("isdone", isDone);
    updateDream({ _id, isDone: !isDone }, { onSuccess });
  };

  const onSuccess = () => {
    refetch();
  };
  const items = data as BucketListProps[];

  return (
    <ListTabContainer>
      <ListValueContainer>
        <TabPanel value={value} index={value}>
          {items.map((dream, idx) => (
            <ListValueWrapper key={`key_${idx}`}>
              <ListItemWrapper>
                <Typography fontType={FontType.COPY_LARGE_BOLD}>
                  <Link href={`/list/${dream._id}`}>{dream.title}</Link>
                </Typography>
                <Button
                  onClick={() => {
                    handleClick(dream._id, dream.isDone);
                  }}
                >
                  <ListTrophy isDone={dream.isDone}>🏆</ListTrophy>
                </Button>
              </ListItemWrapper>
              {idx === items.length - 1 && (
                <Link href="/add-dream">
                  <AddItemLink />
                </Link>
              )}
            </ListValueWrapper>
          ))}
          {items.length === 0 && (
            <AddLinkWrapper>
              <Link href="/add-dream">
                <AddItemLink />
              </Link>
            </AddLinkWrapper>
          )}
        </TabPanel>
      </ListValueContainer>
    </ListTabContainer>
  );
};
