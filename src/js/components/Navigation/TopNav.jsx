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
  width: 16vw;
  margin-left: 2vw;
`;

const UabColorLogo = UabLogo.extend`
  transition: all .4s;
  margin-left: -16vw;
  &:hover {
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 11vw;
  margin-left: 1vw;
  margin-bottom: .5vh;
`;

const IeeeColorLogo = Image.extend`
  transition: all .4s;
  margin-left: -11.05vw;
  &:hover {
    cursor: pointer;
  }
`


const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

class TopNav extends Component {
  state = {
    opacity: '0',
    ieeeOpacity: '0'
  }
  render() {
    return (
      <Container>
        <FlexRow>
          <UabLogo onClick={this.redirectToUAB} src={require("../../../assets/uab_schoolofeng_black.png")} />
          <UabColorLogo style={{opacity: this.state.opacity}} onClick={this.redirectToUAB} src={require("../../../assets/uab_schoolofeng.png")} onMouseOver={() => {this.setState({opacity: '1'})}} onMouseLeave={()=> {this.setState({opacity: '0'})}}/>
          <Image  src={require("../../../assets/ieee_black.png")} />
          <IeeeColorLogo style={{opacity: this.state.ieeeOpacity}} onClick={this.redirectToIEEE} src={require("../../../assets/ieee_blue.png")} onMouseOver={() => {this.setState({ieeeOpacity: '1'})}} onMouseLeave={()=> {this.setState({ieeeOpacity: '0'})}}/>
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
      </Container>
    );
  }

  redirectToUAB = () => {
    window.location.replace('http://www.uab.edu/engineering/home/')
  }
  redirectToIEEE = () => {
    window.location.replace('http://www.ieee.org')
  }
}

export default TopNav;
