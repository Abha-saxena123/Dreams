import type { NextPage } from "next";
import { DreamList } from "../modules/dream-list/components/dream-list";
import {useUserList} from '../modules/users/hooks/use-user-list'
import { Users } from "../modules/dream-list/types/dream-list.types";

const Home: NextPage = () => {
  const { data: userData, isLoading } = useUserList();

  if (isLoading) {
    return <>...Loading</>;
  }

  return <DreamList users={userData as Users[]}  />

};

export default Home;


