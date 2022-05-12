import Link from "next/link";
import styled, { css } from "styled-components";

/**
 * -------------------General header styling-------------------
 */
export const HeaderContainer = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  background-color: darkcyan;
`;


export const HeaderLogoContainer = styled.div`
  margin: 0 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  > span {
    margin-right: 20px !important;
  }
  > h4 {
    font-weight: 600;
    font-style: italic;
    font-family: emoji;
  }
`;

export const HeaderLinkContainer = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
  justify-content: space-between;
  width: 300px;
`;

export const HeaderLink = styled(Link)``;
