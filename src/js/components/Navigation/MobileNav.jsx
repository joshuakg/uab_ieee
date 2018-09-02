import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import { NavLink } from "react-router-dom";
import Responsive from "react-responsive";
import "./nav.css";
import logo from "../../../assets/ieee_mb_white.jpg";
import { CSSTransition } from "react-transition-group";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />;

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

const MobileIcon = styled.div.attrs({
  className: "fas fa-bars"
})`
  color: ${theme.black};
  margin-right: 5vw;
  font-size: 4vw;
`;

const RightContainerMobile = styled.div`
  width: 50vw;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const UabLogo = styled.img`
  width: 16vw;
  margin-left: 2vw;
`;

const UabColorLogo = UabLogo.extend`
  transition: all 0.4s;
  margin-left: -16vw;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 11vw;
  margin-left: 1vw;
  margin-bottom: 0.5vh;
`;

const IeeeColorLogo = Image.extend`
  transition: all 0.4s;
  margin-left: -11.05vw;
  &:hover {
    cursor: pointer;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const MobileNavContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  background-color: red;
`;

class MobileNav extends Component {
  state = {
  };
  render() {
    if (this.props.isVisible){
        return (
            <MobileNavContainer>Test</MobileNavContainer>
        );
    } else {
        return null
    }
  }
}

export default MobileNav;
