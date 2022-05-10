import Link from "next/link";
import styled from "styled-components";
import {
  Button,
  Tab,
  Tabs,
  Typography,
  ValueLabelProps,
} from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { AddCircleOutlineOutlined } from "@material-ui/icons";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface BucketListProps {
  users: string[];
  items: { id: number; value: string }[][];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
                  <Typography variant="h6">{d.value}</Typography>
                  {idx === item.length - 1 && (
                    <Link href="/update-list">
                      <ListLink/>
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

const ListValueButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px !important;
`;

const ListLink = styled(AddCircleOutlineOutlined)`
  padding-right: 10px;
`;

const ListValueContainer = styled.div`
  padding-left: 50px;
  padding-top: 20px;
`;

const ListWrapper = styled.div`
  display: flex;
`;

const ListTab = styled.div`
  border-bottom: 2px solid darkcyan;
`;

const ListPageSideImage = styled.div`
  width: 200px;
  height: 100vh;
  border-right: 2px solid darkcyan;
  border-left: 2px solid darkcyan;
  background-image: url(list-side-image.jpg);
  background-size: contain;
`;

const ListTabContainer = styled.div`
  flex-grow: 1;
`;
