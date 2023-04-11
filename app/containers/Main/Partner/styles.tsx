import styled from 'styled-components';
import { ButtonGreen, Container } from '../../../mixins/mixins';
import { colors, device } from '../../../variables/variables';

export const Partner = styled.section`
  background: ${colors.blue};
  position: relative;
  overflow: hidden;
`;

export const PartnerContainer = styled.div`
  ${Container};
  padding-top: 3rem;
  padding-bottom: 9.6rem;
  @media ${device.mobile} {
    padding-bottom: 6.4rem;
  }
`;

export const Top = styled.div`
  padding-bottom: 3rem;
`;

export const Head = styled.div`
  text-align: center;
`;

interface TitleProps {
  transformValue?: number;
}

export const TitleTop = styled.div<TitleProps>`
  color: white;
  font-weight: 500;
  font-size: 5rem;
  line-height: 14rem;
  letter-spacing: -0.01em;
  transform: ${props => `translateX(${props.transformValue}%) `};
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;

export const PartnerInner = styled.div`
  display: grid;
  grid-template-columns: 34% 66%;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: 9.6rem;
  @media ${device.mobile} {
    display: block;
    padding: 2rem 0;
  }
`;

export const Title = styled.h2`
  color: white;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.01em;
  opacity: 0.6;
  @media ${device.mobile} {
    margin-bottom: 3.2rem;
    font-size: 1.2rem;
  }
`;

export const Content = styled.div``;

export const Text = styled.div`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media ${device.mobile} {
    font-size: 1.8rem;
  }
`;
export const Button = styled.button`
  ${ButtonGreen};
  width: auto;
  justify-content: space-between;
  margin: 6.4rem 0;
  @media ${device.mobile} {
    width: 100%;
    text-transform: none;
  }
`;

export const Icon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3.2rem;
  @media ${device.mobile} {
    display: none;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: ${colors.darkBlue};
  }
`;

export const IconMobile = styled.div`
  display: none;
  width: 1.2rem;
  height: 1.2rem;

  align-items: center;
  justify-content: center;
  margin-left: 3.2rem;
  @media ${device.mobile} {
    display: flex;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: ${colors.darkBlue};
  }
`;

export const PartnerSliderContainer = styled.div`
  margin: 0 auto;
  width: 68.4rem;
  @media ${device.mobile} {
    margin-left: -1.2rem;
    margin-right: -1.2rem;
    height: 0;
    padding-top: 55.7%;
    position: relative;
    width: 100vw;
  }
`;

export const PartnerSlider = styled.div`
  height: 37.8rem;
  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const SlideInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  @media ${device.mobile} {
    position: relative;
    height: 120%;
    top: -10%;
    width: 120%;
    left: -10%;
  }

  img {
    @media ${device.mobile} {
      object-fit: cover;
      object-position: center;
    }
  }
`;

export const PartnerNavigationContainer = styled.div`
  margin: 6.4rem;
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    margin-bottom: 0;
  }
`;
