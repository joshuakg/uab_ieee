import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import Night from "../../../assets/downtown_night.png";
import Color from "color";
import {
  Container,
  PageBody,
  Title,
  ParagraphBody,
  ParagraphContainer,
  ContentContainer,
  PlaceHolder,
  ImagePlaceHolder,
  ContentContainerMobile,
  PlaceHolderMobile
} from "../util/Style";
import Responsive from "react-responsive";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />;

/*
News Archive:
Team:
    Officers:
    Branch Counselor:
    Committee Leaders:
    Students:
Resources and Forms:
    UAB School of Engineering    (https://www.uab.edu/engineering/home/)
    UAB ECE Page        (http://www-ece.eng.uab.edu/)
    IEEE Info:
        Home        (https://www.ewb-usa.org/)
        Shop IEEE    (https://ieeeusa.org/shop/)
        Join IEEE    (https://www.ieee.org/membership/join/index.html)
        myIEEE    (https://www.ieee.org/membership/my-ieee.html)
        IEEEXplore    (https://ieeexplore.ieee.org/Xplore/home.jsp)
        IEEE Societies
    Section Information
    Students Favorite Links
*/
// const Container = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   width: 100vw;
//   min-height: 100vh;
//   align-items: center;
//   background-color: ${theme.white};
// `;

// const PageBody = styled.div`
//   width: 100vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// `;

// const Title = styled.div`
//   font-size: 1.3rem;
//   font-weight: 600;
//   margin: 0.5rem;
// `;
// const ParagraphBody = styled.div`
//   font-weight: 500;
//   margin: 0.5rem;
// `;

// const ParagraphContainer = styled.div`
//   margin: 1rem;
// `;

// const ContentContainer = styled.div`
//   width: 40vw;
//   margin-top: 5vh;
//   border-radius: 10px;
// `;

// const Placeholder = styled.div`
//   margin-top: 5vh;
//   width: 40vw;
// `;

// const ImagePlaceHolder = styled.img.attrs({
//   src: Night
// })`
//   height: 40vh;
//   width: 100vw;
// `;

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

const TeamList = styled.ul`
  list-style-type: none;
`;

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>{this.renderView(false)}</Desktop>
        <Mobile>{this.renderMobileView(true)}</Mobile>
      </React.Fragment>
    );
  }

  renderMobileView = isMobile => {
    return (
      <Container isMobile={isMobile}>
        <ImagePlaceHolder src={Night} />
        <PageBody style={{alignItems: 'center'}} isMobile={isMobile}>
          <ContentContainerMobile isMobile={isMobile}>
            <ParagraphContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>Team</Title>
              <ParagraphBody isMobile={isMobile}>
                <TeamList isMobile={isMobile}>
                  <li>
                    Branch Chair:{" "}
                    <Link href="mailto:rich0925@uab.edu">Joey Richardson</Link>
                  </li>
                  <li>
                    Vice Chair:{" "}
                    <Link href="mailto:collierm@uab.edu">Maggie Collier</Link>
                  </li>
                  <li>
                    Treasurer:{" "}
                    <Link href="mailto:deangood@uab.edu">Dean Good</Link>
                  </li>
                  <li>
                    Secretary:{" "}
                    <Link href="mailto:cmcgarty@uab.edu">Connor McGarty</Link>
                  </li>
                  <li>
                    Webmaster:{" "}
                    <Link href="mailto:joshuakg@uab.edu">Josh Griffin</Link>
                  </li>
                </TeamList>
              </ParagraphBody>
            </ParagraphContainer>
            <ParagraphContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>Resources and Forms</Title>
              <ParagraphBody isMobile={isMobile}>
                <Link href="https://www.uab.edu/engineering/home/">
                  UAB School of Engineering
                </Link>
                <br />
                <Link href="http://www-ece.eng.uab.edu/">UAB ECE Page</Link>
                <br />
              </ParagraphBody>
            </ParagraphContainer>
            <ParagraphContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>IEEE Info</Title>
              <ParagraphBody isMobile={isMobile}>
                <Link href="https://www.ewb-usa.org/">Home</Link>
                <br />
                <Link href="https://ieeeusa.org/shop/">Shop IEEE</Link>
                <br />
                <Link href="https://www.ieee.org/membership/join/index.html">
                  Join IEEE
                </Link>
                <br />
                <Link href="https://www.ieee.org/membership/my-ieee.html">
                  myIEEE
                </Link>
                <br />
                <Link href="https://ieeexplore.ieee.org/Xplore/home.jsp">
                  IEEEXplore
                </Link>
                <br />
              </ParagraphBody>
            </ParagraphContainer>
          </ContentContainerMobile>
          <PlaceHolderMobile isMobile={isMobile}>
            <ParagraphContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>What is IEEE?</Title>
              <ParagraphBody isMobile={isMobile}>
                IEEE is the world’s largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
              </ParagraphBody>
            </ParagraphContainer>
          </PlaceHolderMobile>
        </PageBody>
      </Container>
    );
  };

  renderView = isMobile => {
    return (
      <Container>
        <ImagePlaceHolder src={Night} />
        <PageBody isMobile={isMobile}>
          <ContentContainer isMobile={isMobile}>
            <ParagraphContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>Team</Title>
              <ParagraphBody isMobile={isMobile}>
                <TeamList isMobile={isMobile}>
                  <li>
                    Branch Chair:{" "}
                    <Link href="mailto:rich0925@uab.edu">Joey Richardson</Link>
                  </li>
                  <li>
                    Vice Chair:{" "}
                    <Link href="mailto:collierm@uab.edu">Maggie Collier</Link>
                  </li>
                  <li>
                    Treasurer:{" "}
                    <Link href="mailto:deangood@uab.edu">Dean Good</Link>
                  </li>
                  <li>
                    Secretary:{" "}
                    <Link href="mailto:cmcgarty@uab.edu">Connor McGarty</Link>
                  </li>
                  <li>
                    Webmaster:{" "}
                    <Link href="mailto:joshuakg@uab.edu">Josh Griffin</Link>
                  </li>
                </TeamList>
              </ParagraphBody>
            </ParagraphContainer>
            <ParagraphContainer>
              <Title isMobile={isMobile}>Resources and Forms</Title>
              <ParagraphBody isMobile={isMobile}>
                <Link href="https://www.uab.edu/engineering/home/">
                  UAB School of Engineering
                </Link>
                <br />
                <Link href="http://www-ece.eng.uab.edu/">UAB ECE Page</Link>
                <br />
              </ParagraphBody>
            </ParagraphContainer>
            <ParagraphContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>IEEE Info</Title>
              <ParagraphBody isMobile={isMobile}>
                <Link href="https://www.ewb-usa.org/">Home</Link>
                <br />
                <Link href="https://ieeeusa.org/shop/">Shop IEEE</Link>
                <br />
                <Link href="https://www.ieee.org/membership/join/index.html">
                  Join IEEE
                </Link>
                <br />
                <Link href="https://www.ieee.org/membership/my-ieee.html">
                  myIEEE
                </Link>
                <br />
                <Link href="https://ieeexplore.ieee.org/Xplore/home.jsp">
                  IEEEXplore
                </Link>
                <br />
              </ParagraphBody>
            </ParagraphContainer>
          </ContentContainer>
          <PlaceHolder isMobile={isMobile}>
            <ParagraphContainer isMobile={isMobile}>
              <Title isMobile={isMobile}>What is IEEE?</Title>
              <ParagraphBody isMobile={isMobile}>
                IEEE is the world’s largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
              </ParagraphBody>
            </ParagraphContainer>
          </PlaceHolder>
        </PageBody>
      </Container>
    );
  };
}

export default About;
