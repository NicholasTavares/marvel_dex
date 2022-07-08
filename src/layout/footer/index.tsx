import React from "react";
import {
  FooterContainer,
  FooterCopyright,
  FooterCopyrightContainer,
  MarvelLink,
} from "./styles";

const Footer: React.FunctionComponent = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterCopyrightContainer>
        <FooterCopyright>
          Data provided by{" "}
          <MarvelLink href="https://marvel.com">Marvel</MarvelLink> © {year}{" "}
          MARVEL
        </FooterCopyright>
      </FooterCopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
