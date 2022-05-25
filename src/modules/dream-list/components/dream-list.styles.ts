import { AddCircleOutlineOutlined } from "@material-ui/icons";
import styled from "styled-components";

interface ListTrophyProps {
  isDone: boolean;
}

export const ListValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px !important;
  > div {
    a:-webkit-any-link {
      color: black;
      text-decoration: none;
    }
  }
`;

export const AddItemLink = styled(AddCircleOutlineOutlined)`
  padding-right: 10px;
`;

export const AddLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ListValueContainer = styled.div`
  padding-left: 50px;
  padding-top: 20px;
`;

export const ListTab = styled.div`
  border-bottom: 2px solid darkcyan;
`;

export const ListTabContainer = styled.div`
  flex-grow: 1;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ListTrophy = styled.div<ListTrophyProps>`
  opacity: ${({ isDone }) => (isDone ? 1 : 0.5)};
`;
