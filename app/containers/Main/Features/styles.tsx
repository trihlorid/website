import styled from 'styled-components';
import { ButtonGreen, Container } from '../../../mixins/mixins';
import { colors, device } from '../../../variables/variables';

export const Features = styled.section`
  background: ${colors.darkBlue};
  position: relative;
`;

export const FeaturesContainer = styled.div`
  ${Container};
  padding-right: 0;
  @media ${device.mobile} {
    ${Container};
  }
`;

export const FeaturesInner = styled.div`
  display: grid;
  padding: 9.6rem 0 6.4rem;
  grid-template-columns: 34% 66%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  @media ${device.mobile} {
    display: block;
    padding: 4rem 0;
  }
`;

export const FeaturesLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const NavigationContainer = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

export const FeatureSliderContainer = styled.div`
  overflow: hidden;
  @media ${device.mobile} {
    display: none;
  }
`;

export const FeatureSlider = styled.div`
  width: 56.6rem;
  & .swiper-slide {
    opacity: 0.4;
    transition: opacity 0.3s ease-in-out;
  }

  & .swiper-slide-active {
    opacity: 1;
  }
`;

export const SlideTitle = styled.div`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin-bottom: 6.5rem;
`;

export const SlideCounter = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 140%;
  color: #ffffff;
  margin-bottom: 2.4rem;
`;

export const SlideText = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #ffffff;
  a {
    text-decoration: underline;
  }
`;

interface MobileItemsProps {
  isVisible?: boolean;
}

export const MobileItems = styled.div<MobileItemsProps>`
  display: none;
  @media ${device.mobile} {
    display: block;
    visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${props => (props.isVisible ? '1' : '0')};
    max-height: ${props => (props.isVisible ? '100rem' : '0')};
    transition: 0.3s max-height ease-in-out;
  }
`;

interface ButtonMoreProps {
  isVisible: boolean;
}

export const ButtonMore = styled.div<ButtonMoreProps>`
  ${ButtonGreen};
  display: none;

  text-transform: none;
  justify-content: space-between;
  font-size: 1.2rem;
  @media ${device.mobile} {
    display: ${props => (props.isVisible ? 'flex' : 'none')};
  }
`;

export const MobileItem = styled.div`
  margin-bottom: 3.2rem;
`;

export const MobileItemTitle = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin-bottom: 2.4rem;
`;

export const MobileItemText = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.6;
`;
