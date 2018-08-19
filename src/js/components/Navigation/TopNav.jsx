import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../../assets/ieee_mb_white.jpg";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: ${theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const RightContainer = styled.div`
  width: 50vw;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const UabLogo = styled.img`
  height: 4vh;
  margin-left: 2vw;
`;

const Image = styled.img`
  height: 5vh;
  margin-left: 1vw;
  margin-bottom: .5vh;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

class TopNav extends Component {
  render() {
    return (
      <Container>
        <FlexRow>
          <UabLogo src={require("../../../assets/uab_schoolofeng_black.png")} />
          <Image src={require("../../../assets/ieee_black.png")} />
        </FlexRow>
        <RightContainer>
          <NavLink
            to="/Home"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            About
          </NavLink>
          <NavLink
            to="/Involvement"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Involvement
          </NavLink>
          <NavLink
            to="/Contact"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Contact
          </NavLink>
        </RightContainer>
      </Container>
    );
  }
}

export default TopNav;
