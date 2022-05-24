import type { NextPage } from "next";
import { BucketList } from "../modules/list-by-user/components/list";
import { useUserList } from "../modules/list-by-user/hooks/use-dream-list";
import { Users } from "../modules/list-by-user/types/list.types";

const Home: NextPage = () => {
  const { data: userData, isLoading } = useUserList();

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

  if (isLoading) {
    return <>...Loading</>;
  }

  return <BucketList users={userData as Users[]} items={items} />;
};


export default Home;
