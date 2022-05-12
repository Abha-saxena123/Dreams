import { AddCircleOutlineOutlined } from "@material-ui/icons";
import styled from "styled-components";

export const ListValueButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px !important;
`;

export const ListLink = styled(AddCircleOutlineOutlined)`
padding-right: 10px;
`;

export const ListValueContainer = styled.div`
padding-left: 50px;
padding-top: 20px;
`;

export const ListWrapper = styled.div`
display: flex;
`;

export const ListTab = styled.div`
border-bottom: 2px solid darkcyan;
`;

export const ListPageSideImage = styled.div`
width: 200px;
height: 100vh;
border-right: 2px solid darkcyan;
border-left: 2px solid darkcyan;
background-image: url(list-side-image.jpg);
background-size: contain;
`;

export const ListTabContainer = styled.div`
flex-grow: 1;
`;
