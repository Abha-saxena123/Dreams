import React from "react";
import {
  HeaderContainer,
  HeaderLinkContainer,
  HeaderLinkText,
} from "./header.styles";
import { useRouter } from "next/router";
import { FontType } from "../../../utils/constants/typography.constants";
import Link from "next/link";

export const Header: React.FC = () => {
  const links = ["/", "/add-dream", "add-user"];
  const linkValue = ["List", "Add Dreams", "Add User"];

  return (
    <HeaderContainer>
      <HeaderLinkContainer>
        {links.map((link, idx) => (
          <HeaderLinkText fontType={FontType.HEADLINE1} key={idx}>
            <Link href={link}>{linkValue[idx]}</Link>
          </HeaderLinkText>
        ))}
      </HeaderLinkContainer>
    </HeaderContainer>
  );
};
