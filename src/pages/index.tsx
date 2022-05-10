import type { NextPage } from "next";
import styled from "styled-components";
import { Tab, Tabs, Typography } from "@material-ui/core";
import { useState } from "react";
import { BucketList } from "../modules/list-by-user/list";

const Home: NextPage = () => {
  const users = ["Abha", "Deepti"];
  const items = [
    [
      { id: 1, value: "NY" },
      { id: 2, value: "SA" },
    ],
    [
      { id: 1, value: "DU" },
      { id: 2, value: "USA" },
    ],
  ];

  return <BucketList users={users} items={items} />;
};

export default Home;
