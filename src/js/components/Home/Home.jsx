import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import Green from "../../../assets/green.png";
import Twitter from "./Twitter";
// import { PlaceHolder } from "../util/Style"
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

const Data = [
  {
    title: "What is IEEE?",
    body:
      "IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions"
  },
  {
    title: "Joining IEEE at UAB",
    body:
      "The mission for the UAB IEEE Student Branch aims to achieve all that the parent branch is working towards, and more. IEEE at UAB works with all Engineering disciplines to bring the creative minds of students together for the best possible experience in the School of Engineering. Joining IEEE at UAB gets you access to a network of older classmen who have taken the courses, professor relationships outside of the classroom, and much more."
  }
];

class Home extends Component {
  render() {
    return (
      <div>
        <Desktop>{this.renderPage(false)}</Desktop>
        <Mobile>{this.renderPage(true)}</Mobile>
      </div>
    );
  }

  renderPage = isMobile => {
    console.log(isMobile);
    return (
      <Container isMobile={isMobile}>
        <ImagePlaceHolder isMobile={isMobile} src={Green} />
        <PageBody isMobile={isMobile}>
          <Desktop>
            <ContentContainer isMobile={isMobile}>
              {Data.map((content, index) => {
                return (
                  <ParagraphContainer key={index} isMobile={isMobile}>
                    <Title isMobile={isMobile}>{content.title}</Title>
                    <ParagraphBody isMobile={isMobile}>
                      {content.body}
                    </ParagraphBody>
                  </ParagraphContainer>
                );
              })}
            </ContentContainer>
            <PlaceHolder isMobile={isMobile}>
              <Twitter isMobile={isMobile} />
            </PlaceHolder>
          </Desktop>
        </PageBody>
        <Mobile>
          <ContentContainerMobile>
            {Data.map((content, index) => {
              return (
                <ParagraphContainer key={index} isMobile={isMobile}>
                  <Title isMobile={isMobile}>{content.title}</Title>
                  <ParagraphBody isMobile={isMobile}>
                    {content.body}
                  </ParagraphBody>
                </ParagraphContainer>
              );
            })}
          </ContentContainerMobile>
          <PlaceHolderMobile isMobile={isMobile}>
              <Twitter width='100%' isMobile={isMobile} />
          </PlaceHolderMobile>
        </Mobile>
      </Container>
    );
  };
}

export default Home;
