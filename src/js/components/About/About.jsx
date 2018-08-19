import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import Night from "../../../assets/downtown_night.png";
import Color from 'color'

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
`;

const ContentContainer = styled.div`
  width: 40vw;
  margin-top: 5vh;
  border-radius: 10px;
`;

const Placeholder = styled.div`
  width: 40vw;
`;

const ImagePlaceHolder = styled.img.attrs({
  src: Night
})`
  height: 40vh;
  width: 100vw;
`;

const Link = styled.a`
  transition: all .4s;
  font-weight: 500;
  display: inline;
  text-decoration: none;
  color: #00b5e2;
  text-indent: 5%;
  &:hover {
    color: ${Color('#00b5e2').darken(0.4).string()}
  }
`;

const TeamList = styled.ul`
  list-style-type: none;
`;

class About extends Component {
  render() {
    return (
      <Container>
        <ImagePlaceHolder />
        <PageBody>
          <ContentContainer>
           <ParagraphContainer>
             <Title>Team</Title>
             <ParagraphBody>
               <TeamList>
                 <li>Branch Chair: <Link href="mailto:rich0925@uab.edu">Joey Richardson</Link></li>
                 <li>Vice Chair: <Link href="mailto:collierm@uab.edu">Maggie Collier</Link></li>
                 <li>Treasurer: <Link href="mailto:deangood@uab.edu">Dean Good</Link></li>
                 <li>Secretary: <Link href="mailto:cmcgarty@uab.edu">Connor McGarty</Link></li>
                 <li>Webmaster: <Link href="mailto:joshuakg@uab.edu">Josh Griffin</Link></li>
               </TeamList>
               </ParagraphBody>
             </ParagraphContainer>
           <ParagraphContainer>
              <Title>Resources and Forms</Title>
              <ParagraphBody>
                <Link href="https://www.uab.edu/engineering/home/">UAB School of Engineering</Link><br></br>
                <Link href="http://www-ece.eng.uab.edu/">UAB ECE Page</Link><br></br>
              </ParagraphBody>
            </ParagraphContainer>
            <ParagraphContainer>
              <Title>IEEE Info</Title>
              <ParagraphBody>
                <Link href="https://www.ewb-usa.org/">Home</Link><br></br>
                <Link href="https://ieeeusa.org/shop/">Shop IEEE</Link><br></br>
                <Link href="https://www.ieee.org/membership/join/index.html">Join IEEE</Link><br></br>
                <Link href="https://www.ieee.org/membership/my-ieee.html">myIEEE</Link><br></br>
                <Link href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEEXplore</Link><br></br>
              </ParagraphBody>
            </ParagraphContainer>
          </ContentContainer>
          <Placeholder></Placeholder>
        </PageBody>
      </Container>
    );
  }
}

export default About;
