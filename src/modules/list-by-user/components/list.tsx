import Link from "next/link";
import styled from "styled-components";
import { Tab, Tabs, Typography, ValueLabelProps } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import { TabPanelProps, BucketListProps } from "../types/list.types";
import { a11yProps, TabPanel } from "../helpers/list.helper";
import {
  ListWrapper,
  ListPageSideImage,
  ListTabContainer,
  ListTab,
  ListValueContainer,
  ListValueButton,
  ListLink,
} from "./list.styles";



export const BucketList: React.FC<BucketListProps> = ({ users, items }) => {
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(0);

  return (
    <ListWrapper>
      <ListPageSideImage />
      <ListTabContainer>
        <ListTab>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {users.map((name: string, idx: number) => (
              <Tab
                label={<Typography variant="h6">{name}</Typography>}
                {...a11yProps(idx)}
                key={`key_${idx}`}
              />
            ))}
          </Tabs>
        </ListTab>
        <ListValueContainer>
          {items.map((item, idx) => (
            <TabPanel value={value} index={idx} key={`item_${idx}`}>
              {item.map((d, idx: number) => (
                <ListValueButton key={`key_${idx}`}>
                  <Link href={`/list/${d.id}`}>
                    <Typography variant="h6">{d.value}</Typography>
                  </Link>
                  {idx === item.length - 1 && (
                    <Link href="/update-list">
                      <ListLink />
                    </Link>
                  )}
                </ListValueButton>
              ))}
            </TabPanel>
          ))}
        </ListValueContainer>
      </ListTabContainer>
      <ListPageSideImage />
    </ListWrapper>
  );
};
