import Link from "next/link";
import { BucketListProps, Users } from "../types/dream-list.types";
import { TabPanel } from "../helpers/dream-list.helper";
import {
  ListTabContainer,
  ListValueContainer,
  ListValueButton,
  AddItemLink,
  AddLinkWrapper,
} from "./dream-list.styles";
import { Typography } from "../../common/components/typography/typography";
import { FontType } from "../../common/utils/constants/typography.constants";
import { useDreamList } from "../hooks/use-dream-list";

export const DreamListItems: React.FC<{
  user: Users[];
  value: number;
}> = ({ user, value }) => {
  const { data, isLoading } = useDreamList(user[value].firstName);

  if (isLoading) {
    return <>Loading...</>;
  }

  const items = data as BucketListProps[];

  return (
    <ListTabContainer>
      <ListValueContainer>
        <TabPanel value={value} index={value}>
          {items.map((dream, idx) => (
            <ListValueButton key={`key_${idx}`}>
              <Typography fontType={FontType.COPY_LARGE_BOLD}>
                <Link href={`/list/${dream._id}`}>{dream.title}</Link>
              </Typography>
              {idx === items.length - 1 && (
                <Link href="/update-list">
                  <AddItemLink />
                </Link>
              )}
            </ListValueButton>
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
