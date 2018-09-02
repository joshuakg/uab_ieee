import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../util/theme";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const IFrame = styled.iframe`
  width: 40vw;
  height: 50vh;
  margin-top: 5vh;
  color: red;
`

class Twitter extends Component {
  render() {
    return (
      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="IEEEorg"
      options={{height: '80vh', width: this.props.isMobile ? '70vw' : '40vw'}}
    />
    );
  }
}

export default Twitter;
