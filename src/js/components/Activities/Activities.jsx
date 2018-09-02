import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import Color from "color";
import Blvd from "../../../assets/university_blvd.png";
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
import Responsive from "react-responsive";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />;

// const Container = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   width: 100vw;
//   min-height: 100vh;
//   align-items: center;
//   background-color: ${theme.white};
// `;

// const ImagePlaceHolder = styled.img.attrs({
//   src: Blvd
// })`
//   height: 40vh;
//   width: 100vw;
// `;

// const PageBody = styled.div`
//   width: 100vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// `;

// const ContentContainer = styled.div`
//   width: 40vw;
//   margin-top: 5vh;
//   border-radius: 10px;
// `;

// const Title = styled.div`
//   font-size: 1.3rem;
//   font-weight: 600;
//   margin: 0.5rem;
//   text-align: center;
// `;

// const ParagraphContainer = styled.div`
//   margin: 1rem;
// `;

// const ParagraphBody = styled.div`
//   font-weight: 500;
//   margin: 0.5rem;
// `;

// const Placeholder = styled.div`
//   width: 40vw;
// `;

const Subheader = styled.h2`
  font-style: italic;
`;

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

/*
INVOLVEMENT:
Membership:
    “Benefits:”
“Joining IEEE at UAB grants you access to a large and developing network of other like-minded individuals. IEEE at UAB aims to include all students and faculty who care about the betterment of society. By joining you gain access to:
 Meetings where speakers will be invited to teach the student and faculty body about research they have been performing. This will include our very own professors, professionals from outside businesses and organizations, etc.” 
An open Slack channel to members of IEEE. Here students can easily discuss new and exciting events and topics. Also allows for easy access to meeting other members of IEEE.
    “Activities”
“IEEE at UAB is aimed at being heavily involved in the community and helping its members to grow as young professionals. IEEE at UAB has several activities that can be participated in. A few are:
Student Branch meetings. Here the meeting will be focused on community involvement, topics discussed by outside speakers, and networking opportunities
IEEE SoutheastCon Technical conference. Here one can learn about developing technologies that aim to revolutionize the industry”
Hardware Competitions
Software Competitions
// Students Competitions
//     “Future Endeavors (Ideas)”
// University Partnership Program
// Lab Commitee
// Standards Trivia
// Hacker-Space
// A space where creativity has no limits. This space will have Soldering irons, programmable microcontrollers, 3D printers, workstations for building your visions, common space for students.
// Student Projects
//     “Volunteering”
// “Involvement within the community is vital for growing as a society. IEEE at UAB is passionate about growing future leaders and giving them the knowledge they need to the next great innovators. IEEE at UAB also cares about the developing countries. IEEE at UAB would like for their members to learn more about opportunities that are out there where they can put their talents and knowledge to good use. Two movements that IEEE at UAB is involved in are:
// IEEE Move Truck    (http://move.ieeeusa.org/)
// Engineers Without Borders    (https://www.ewb-usa.org/)
// */

class Involvement extends Component {
  render() {
    return (
      <Container>
        <ImagePlaceHolder src={Blvd} />
        <PageBody>
          <Desktop>
            <ContentContainer>
              <ParagraphContainer>
                <ParagraphBody>
                  <Title style={{ textAlign: "center" }}>
                    More Information About UAB IEEE Activities Coming Soon
                  </Title>
                </ParagraphBody>
              </ParagraphContainer>
            </ContentContainer>
          </Desktop>
          <Mobile>
          <ContentContainerMobile>
              <ParagraphContainer>
                <ParagraphBody isMobile={true}>
                  <Title isMobile={true} style={{ textAlign: "center" }}>
                    More Information About UAB IEEE Activities Coming Soon
                  </Title>
                </ParagraphBody>
              </ParagraphContainer>
            </ContentContainerMobile>
          </Mobile>
        </PageBody>
      </Container>
    );
  }
}

export default Involvement;
