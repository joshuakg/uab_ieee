import styled from "styled-components";
import { theme } from './theme'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  background-color: ${theme.white};
`;

export const PageBody = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.5rem;
`;
export const ParagraphBody = styled.div`
  font-weight: 500;
  margin: 0.5rem;
`;

export const ParagraphContainer = styled.div`
  margin: 1rem;
  margin-bottom: 5vh;
`;

export const ContentContainer = styled.div`
  width: 40vw;
  margin-top: 5vh;
  margin-left: 3vw;
  border-radius: 10px;
  background-color: white;
`;

export const PlaceHolder = styled.div`
  margin-top: 5vh;
  margin-right: 3vw;
  width: 40vw;
  background-color: white;
  border-radius: 10px;
`;

export const ImagePlaceHolder = styled.img.attrs({
  // src: Green
})`
  height: 50vh;
  width: 100vw;
`;
