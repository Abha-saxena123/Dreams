import { AddCircleOutlineOutlined } from "@material-ui/icons";
import styled from "styled-components";

export const ListValueButton = styled.div`
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
