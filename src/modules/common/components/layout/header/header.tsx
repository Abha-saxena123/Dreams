import React, { useState, ChangeEvent } from "react";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLink,
  HeaderLinkContainer
} from "./header.styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { Typography } from "@material-ui/core";

export const Header: React.FC = () => {
  const router = useRouter();

  const links = ["/", "/add-dream"];
  const linkValue = ["List", "Add Dreams"];

  return (
    <HeaderContainer>
      <HeaderLinkContainer>
        {links.map((link, idx) => (
          <HeaderLink href={link} key={link}>
            <Typography variant="h4">{linkValue[idx]}</Typography>
          </HeaderLink>
        ))}
      </HeaderLinkContainer>
    </HeaderContainer>
  );
};
