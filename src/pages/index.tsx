import type { NextPage } from "next";
import { BucketList } from "../modules/list-by-user/components/list";

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
