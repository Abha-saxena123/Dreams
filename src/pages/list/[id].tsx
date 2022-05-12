import type { NextPage } from "next";
import styled from "styled-components";
import { DreamDetails } from "../../modules/details-page/components/dream-details";

const DreamDetailsPage: NextPage = () => {
  return (
    <Wrapper>
      <DreamDetails />
    </Wrapper>
  );
};

export default DreamDetailsPage;

const Wrapper = styled.div`
  background-image: url(default-details-image.jpg);
  background-size: cover;
`;
