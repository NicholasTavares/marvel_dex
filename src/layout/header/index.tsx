import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Option,
  OptionsContainer,
  TextOption,
  UndelineDecorationRed,
  UndelineDecorationBlue,
  UndelineDecorationOrange,
  TextContainer,
  TextContent,
  AnimationContainer,
} from "./styles";
import logo from "../../assets/logo.png";

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logo} />
        <OptionsContainer>
          <Option href="#characters-section">
            <TextOption>Events</TextOption>
            <UndelineDecorationBlue />
          </Option>
          <Option href="#events-section">
            <TextOption>Characters</TextOption>
            <UndelineDecorationRed />
          </Option>
          <Option href="#creators-section">
            <TextOption>Creators</TextOption>
            <UndelineDecorationOrange />
          </Option>
        </OptionsContainer>
      </HeaderContent>
      <TextContainer>
        <TextContent>Explore Marvel Universe like a real fan!</TextContent>
        <AnimationContainer />
      </TextContainer>
    </HeaderContainer>
  );
};

export default Header;
