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

export const DreamListItems: React.FC<{
  user: Users[];
  value: number;
}> = ({ user, value }) => {
  const { data, isLoading } = useDreamList(user[value].firstName);

  if (isLoading) {
    return <>Loading...</>;
  }

  const handleClick = (id: ObjectId) => {
    console.log("id", id);
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
                    handleClick(dream._id);
                  }}
                >
                  <ListTrophy isDone={dream.isDone}>🏆</ListTrophy>
                </Button>
              </ListItemWrapper>
              {idx === items.length - 1 && (
                <Link href="/update-list">
                  <AddItemLink />
                </Link>
              )}
            </ListValueWrapper>
          ))}
          {items.length === 0 && (
            <AddLinkWrapper>
              <Link href="/update-list">
                <AddItemLink />
              </Link>
            </AddLinkWrapper>
          )}
        </TabPanel>
      </ListValueContainer>
    </ListTabContainer>
  );
};
