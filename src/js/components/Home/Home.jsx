import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import Green from "../../../assets/green.png";
import Twitter from './Twitter'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  background-color: ${theme.white};
`;

const PageBody = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.5rem;
`;
const ParagraphBody = styled.div`
  font-weight: 500;
  margin: 0.5rem;
`;

const ParagraphContainer = styled.div`
  margin: 1rem;
  margin-bottom: 5vh;
`;

const ContentContainer = styled.div`
  width: 40vw;
  margin-top: 5vh;
  margin-left: 3vw;
  border-radius: 10px;
  background-color: white;
`;

const CalenderContianer = styled.div`
  margin-top: 5vh;
  margin-right: 3vw;
  width: 40vw;
`;

const ImagePlaceHolder = styled.img.attrs({
  src: Green
})`
  height: 40vh;
  width: 100vw;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <ImagePlaceHolder />
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
          <CalenderContianer>
            <Twitter/>
          </CalenderContianer>
        </PageBody>
      </Container>
    );
  }
}

export default Home;
