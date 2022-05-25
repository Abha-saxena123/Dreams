import { Tab, Tabs, ValueLabelProps } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { a11yProps, TabPanel } from "../helpers/dream-list.helper";
import { ListTabContainer, ListTab } from "./dream-list.styles";
import { Typography } from "../../common/components/typography/typography";
import { FontType } from "../../common/utils/constants/typography.constants";
import { DreamListItems } from "./dream-list-items";
import { Users } from "../types/dream-list.types";

interface BucketListPageProps {
  users: Users[];
}

export const BucketList: React.FC<BucketListPageProps> = ({ users }) => {
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(0);

  return (
    <ListTabContainer>
      <ListTab>
        <Tabs value={value} onChange={handleChange} aria-label="User names">
          {users.map(({ firstName }, idx: number) => (
            <Tab
              label={
                <Typography fontType={FontType.COPY_LARGE_BOLD}>
                  {firstName}
                </Typography>
              }
              {...a11yProps(idx)}
              key={`key_${idx}`}
            />
          ))}
        </Tabs>
      </ListTab>
      <DreamListItems value={value} user={users} />
    </ListTabContainer>
  );
};
