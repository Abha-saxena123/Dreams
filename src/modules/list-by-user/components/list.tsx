import Link from "next/link";
import styled from "styled-components";
import { Tab, Tabs, ValueLabelProps } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import { BucketListProps, TabPanelProps } from "../types/list.types";
import { a11yProps, TabPanel } from "../helpers/list.helper";
import {
  ListTabContainer,
  ListTab,
  ListValueContainer,
  ListValueButton,
  ListLink,
} from "./list.styles";
import { Typography } from "../../common/components/typography/typography";
import { FontType } from "../../common/utils/constants/typography.constants";

export const BucketList: React.FC<BucketListProps> = ({ users, items }) => {
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(0);

  return (
    <ListTabContainer>
      <ListTab>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
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
      <ListValueContainer>
        {items.map((item, idx) => (
          <>
            <TabPanel value={value} index={idx} key={`item_${idx}`}>
              {item.map((d, idx: number) => (
                <ListValueButton key={`key_${idx}`}>
                  <Typography fontType={FontType.COPY_LARGE_BOLD}>
                    <Link href={`/list/${d.id}`}>{d.value}</Link>
                  </Typography>
                  {(idx === item.length - 1 || item.length === 0) && (
                    <Link href="/update-list">
                      <ListLink />
                    </Link>
                  )}
                </ListValueButton>
              ))}
            </TabPanel>
            {item.length === 0 && (
              <Link href="/update-list">
                <ListLink />
              </Link>
            )}
          </>
        ))}
      </ListValueContainer>
    </ListTabContainer>
  );
};
