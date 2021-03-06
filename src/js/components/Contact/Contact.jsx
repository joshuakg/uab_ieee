import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import Hill from "../../../assets/hill.png";
import {
  Container,
  PageBody,
  Title,
  ParagraphBody,
  ParagraphContainer,
  ContentContainer,
  PlaceHolder,
  ImagePlaceHolder,
  ContentContainerMobile
} from "../util/Style";
import Color from "color";
import Responsive from "react-responsive";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />;

const Link = styled.a`
  transition: all 0.4s;
  font-weight: 500;
  display: inline;
  text-decoration: none;
  color: #00b5e2;
  text-indent: 5%;
  &:hover {
    color: ${Color("#00b5e2")
      .darken(0.4)
      .string()};
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <ImagePlaceHolder src={Hill} />
        <PageBody>
        <Desktop>
          <ContentContainer>            
              <ParagraphContainer>
                <Title>Contact</Title>
                <ParagraphBody>
                  To contact our branch president, or to find ways to stay in
                  touch with other members, please see the information below:
                  <br />
                  <br />
                  Joey Richardson
                  <br />
                  <Link href="uab-ieee@ieee.org">uab-ieee@ieee.org</Link>
                  <br />
                  (615) 574-0532
                  <br />
                  <br />
                </ParagraphBody>
                <ParagraphBody>
                  UAB Electrical Engineering Department Address
                  <br />
                  1150 10th Avenue South - Suite 256
                  <br />
                  Birmingham, AL 35294-4461
                  <br />
                </ParagraphBody>
              </ParagraphContainer>            
          </ContentContainer>
          </Desktop>
          <Mobile>
          <ContentContainerMobile>            
              <ParagraphContainer>
                <Title isMobile={true}>Contact</Title>
                <ParagraphBody isMobile={true}>
                  To contact our branch president, or to find ways to stay in
                  touch with other members, please see the information below:
                  <br />
                  <br />
                  Joey Richardson
                  <br />
                  <Link href="uab-ieee@ieee.org">uab-ieee@ieee.org</Link>
                  <br />
                  (615) 574-0532
                  <br />
                  <br />
                </ParagraphBody>
                <ParagraphBody isMobile={true}>
                  UAB Electrical Engineering Department Address
                  <br />
                  1150 10th Avenue South - Suite 256
                  <br />
                  Birmingham, AL 35294-4461
                  <br />
                </ParagraphBody>
              </ParagraphContainer>            
          </ContentContainerMobile>
          </Mobile>
        </PageBody>
      </Container>
    );
  }
}

export default Contact;
