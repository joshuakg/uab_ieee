import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import { NavLink } from "react-router-dom";
import Responsive from "react-responsive";
import MobileNav from "./MobileNav";
import "./nav.css";
import logo from "../../../assets/ieee_mb_white.jpg";
import { CSSTransitionGroup, TransitionGroup } from "react-transition-group";
import { isMobile } from "react-device-detect";

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
  font-size: 5vw;
  margin-right: 5vw;
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
  width: ${props => (props.isMobile ? "20vw" : "16vw")};
  margin-left: 2vw;
`;

const UabColorLogo = UabLogo.extend`
  transition: all 0.4s;
  margin-left: ${props => (props.isMobile ? "-20vw" : "-16vw")};
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: ${props => (props.isMobile ? "20vw" : "11vw")};
  margin-left: 1vw;
  margin-bottom: 0.5vh;
`;

const IeeeColorLogo = Image.extend`
  transition: all 0.4s;
  margin-left: ${props => (props.isMobile ? "-20vw" : "-11.05vw")};
  &:hover {
    cursor: pointer;
  }
`;

const FlexRow = styled.div`
  display: flex;
  width: 50vw;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const MobileNavContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  background-color: ${theme.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

class TopNav extends Component {
  state = {
    opacity: "0",
    ieeeOpacity: "0",
    isMobileNavVisible: false
  };
  render() {
    return (
      <Container>
        <FlexRow>
          <UabLogo
            isMobile={isMobile}
            onClick={this.redirectToUAB}
            src={require("../../../assets/uab_schoolofeng_black.png")}
          />
          <UabColorLogo
            isMobile={isMobile}
            style={{ opacity: this.state.opacity }}
            onClick={this.redirectToUAB}
            src={require("../../../assets/uab_schoolofeng.png")}
            onMouseOver={() => {
              this.setState({ opacity: "1" });
            }}
            onMouseLeave={() => {
              this.setState({ opacity: "0" });
            }}
          />
          <Image
            isMobile={isMobile}
            src={require("../../../assets/ieee_black.png")}
          />
          <IeeeColorLogo
            isMobile={isMobile}
            style={{ opacity: this.state.ieeeOpacity }}
            onClick={this.redirectToIEEE}
            src={require("../../../assets/ieee_blue.png")}
            onMouseOver={() => {
              this.setState({ ieeeOpacity: "1" });
            }}
            onMouseLeave={() => {
              this.setState({ ieeeOpacity: "0" });
            }}
          />
        </FlexRow>
        <Desktop>
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
              to="/Activities"
              className="nav-link"
              activeClassName="active-nav-link"
            >
              Activities
            </NavLink>
            <NavLink
              to="/Contact"
              className="nav-link"
              activeClassName="active-nav-link"
            >
              Contact
            </NavLink>
          </RightContainer>
        </Desktop>
        <Mobile>
          <RightContainerMobile>
            <MobileIcon
              onClick={() => {
                this.setState({
                  isMobileNavVisible: !this.state.isMobileNavVisible
                });
              }}
            />
          </RightContainerMobile>
        </Mobile>
        <CSSTransitionGroup
          transitionName={{
            enter: "enter",
            enterActive: "active",
            leave: "leave",
            leaveActive: "leaveActive"
          }}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.renderMobileNav()}
        </CSSTransitionGroup>
      </Container>
    );
  }

  renderMobileNav = () => {
    if (this.state.isMobileNavVisible) {
      return (
        <MobileNavContainer
          onClick={() => {
            this.setState({
              isMobileNavVisible: !this.state.isMobileNavVisible
            });
          }}
        >
          <NavLink
            to="/Home"
            className="nav-link"
            activeClassName="active-nav-link"
            style={{ borderTop: "none", marginTop: "10vh" }}
            onClick={() => {
              this.setState({
                isMobileNavVisible: !this.state.isMobileNavVisible
              });
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className="nav-link"
            activeClassName="active-nav-link"
            style={{ borderTop: "none" }}
            onClick={() => {
              this.setState({
                isMobileNavVisible: !this.state.isMobileNavVisible
              });
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/Activities"
            className="nav-link"
            activeClassName="active-nav-link"
            style={{ borderTop: "none" }}
            onClick={() => {
              this.setState({
                isMobileNavVisible: !this.state.isMobileNavVisible
              });
            }}
          >
            Activities
          </NavLink>
          <NavLink
            to="/Contact"
            className="nav-link"
            activeClassName="active-nav-link"
            style={{ borderTop: "none" }}
            onClick={() => {
              this.setState({
                isMobileNavVisible: !this.state.isMobileNavVisible
              });
            }}
          >
            Contact
          </NavLink>
        </MobileNavContainer>
      );
    }
  };

  redirectToUAB = () => {
    window.location.replace("http://www.uab.edu/engineering/home/");
  };
  redirectToIEEE = () => {
    window.location.replace("http://www.ieee.org");
  };
}

export default TopNav;
