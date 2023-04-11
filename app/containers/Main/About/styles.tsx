import styled from 'styled-components';
import { Container } from '../../../mixins/mixins';
import { colors, device } from '../../../variables/variables';

export const About = styled.section`
  background: ${colors.darkBlue};
  position: relative;
`;

export const AboutContainer = styled.div`
  ${Container};
`;

export const AboutInner = styled.div`
  display: grid;
  padding: 9.6rem 0;
  grid-template-columns: 34% 66%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  @media ${device.mobile} {
    display: block;
    padding: 4rem 0;
  }
`;

export const Title = styled.h2`
  color: white;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2rem;
  letter-spacing: -0.01em;
  opacity: 0.6;
  @media ${device.mobile} {
    margin-bottom: 3.2rem;
    font-size: 1.4rem;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #ffffff;
  max-width: 80.3rem;
  @media ${device.mobile} {
    font-size: 1.8rem;
  }
`;

export const TextSm = styled.div`
  font-weight: 500;
  max-width: 80.3rem;
  font-size: 1.8rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  padding-top: 4.2rem;
  color: #ffffff;
  a {
    text-decoration: underline;
  }
  p {
    margin-bottom: 2.4rem;
  }
  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;
