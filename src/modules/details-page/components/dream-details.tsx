import styled from "styled-components";
import { InfoTile } from "../../common/components/infotile/infotile";
import { DreamDetailsPageProps } from "../types/dream-details";
import defaultBackgroundImage from "../../../../public/default-details-image.jpg";

const mockData: DreamDetailsPageProps = {
  id: "1",
  title: "Dream",
  description: "This is my dream destination",
  remarks: "",
  experience: "Loved it",
};

export const DreamDetails: React.FC = () => {
  return (
    <DreamDetailsWrapper>
      <InfoTile label={"Title"}>{mockData.title}</InfoTile>
      <InfoTile label={"Description"} fontSizeChildren={16}>
        {mockData.description}
      </InfoTile>
      {!!mockData.remarks && (
        <InfoTile label={"Remarks"} fontSizeChildren={16}>
          {mockData.remarks}
        </InfoTile>
      )}
      {!!mockData.experience && (
        <InfoTile label={"Experience"} fontSizeChildren={16}>
          {mockData.experience}
        </InfoTile>
      )}
    </DreamDetailsWrapper>
  );
};

const DreamDetailsWrapper = styled.div`
  padding: 20px 100px;
  padding-bottom: 0;
  height: 100vh;
  text-align: center;
  //   background-image: url(default-details-image.jpg);
  //   background-image: url(defaultBackgroundImage);
  background-size: cover;
`;
