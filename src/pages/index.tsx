import type { NextPage } from "next";
import { BucketList } from "../modules/dream-list/components/dream-list";
import {useUserList} from '../modules/users/hooks/use-user-list'
import { Users } from "../modules/dream-list/types/dream-list.types";

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

  return <BucketList users={userData as Users[]}  />

};

export default Home;


