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
import { Button } from "@material-ui/core";
import { MarkItDoneFrom } from "./add-experience-form";

export const DreamListItems: React.FC<{
  user: Users[];
  value: number;
}> = ({ user, value }) => {
  const { data, isLoading, refetch } = useDreamList(user[value].firstName);

  if (isLoading) {
    return <>Loading...</>;
  }

  const openForm = () => {
    (document.getElementById("markDonePopup") as HTMLElement).style.display =
      "block";
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
                <Button onClick={openForm}>
                  <ListTrophy isDone={dream.isDone}>🏆</ListTrophy>
                </Button>
                <MarkItDoneFrom
                  id={dream._id}
                  isDone={dream.isDone}
                  refetch={refetch}
                />
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
