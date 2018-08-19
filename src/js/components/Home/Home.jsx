import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import Green from "../../../assets/green.png";
import Twitter from "./Twitter";
// import { PlaceHolder } from "../util/Style";
import {
  Container,
  PageBody,
  Title,
  ParagraphBody,
  ParagraphContainer,
  ContentContainer,
  PlaceHolder,
  ImagePlaceHolder
} from "../util/Style";

class Home extends Component {
  render() {
    return (
      <Container>
        <ImagePlaceHolder src={Green} />
        <PageBody>
          <ContentContainer>
            <ParagraphContainer>
              <Title>What is IEEE?</Title>
              <ParagraphBody>
                IEEE is the world’s largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
                IEEE will be essential to the global technical community and to
                technical professionals everywhere, and be universally
                recognized for the contributions of technology and of technical
                professionals in improving global conditions
              </ParagraphBody>
            </ParagraphContainer>
            <ParagraphContainer>
              <Title>Joining IEEE at UAB</Title>
              <ParagraphBody>
                The mission for the UAB IEEE Student Branch aims to achieve all
                that the parent branch is working towards, and more. IEEE at UAB
                works with all Engineering disciplines to bring the creative
                minds of students together for the best possible experience in
                the School of Engineering. Joining IEEE at UAB gets you access
                to a network of older classmen who have taken the courses,
                professor relationships outside of the classroom, and much more.
              </ParagraphBody>
            </ParagraphContainer>
          </ContentContainer>
          <PlaceHolder>
            <Twitter />
          </PlaceHolder>
        </PageBody>
      </Container>
    );
  }
}

export default Home;
