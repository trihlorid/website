import styled, { keyframes } from 'styled-components';
import { Container } from '../../../mixins/mixins';
import { colors, device, sizes } from '../../../variables/variables';

export const Top = styled.div`
  background: linear-gradient(45deg, #3a86ff 55%, #8338ec);
  position: relative;
  padding-top: 8rem;
  overflow: hidden;
`;

export const Head = styled.div`
  position: fixed;
  top: 24rem;
  z-index: 5;
  pointer-events: none;
  width: 100%;
  @media ${device.mobile} {
    top: 13rem;
  }
`;

interface TitleProps {
  transformValue: number;
}

export const Title = styled.div`
  color: white;
  font-weight: 500;
  font-size: 12rem;
  line-height: 14rem;
  letter-spacing: -0.01em;
  @media ${device.mobile} {
    font-size: 5.4rem;
    line-height: 11rem;
  }
`;

export const TitleTop = styled(Title)<TitleProps>`
  text-align: right;
  transform: ${props => `translateX(-${props.transformValue}%)`};
  display: flex;
  justify-content: flex-end;
`;

const TextToLeftAnimation = keyframes`
 0% {
   transform: translateX(50%);
   opacity: 0;
 }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

interface AnimateTextProps {
  startAnimation: boolean;
}
export const AnimateTextToLeftOne = styled.span<AnimateTextProps>`
  display: flex;
  white-space: nowrap;
  position: relative;
  justify-content: flex-end;
  transition: transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 1s,
    opacity 0.7s cubic-bezier(0.83, 0, 0.17, 1) 1s;
  // transform: ${props => (props.startAnimation ? '0' : 'translateX(50%)')};
  opacity: ${props => (props.startAnimation ? '1' : '0')};
  &:after {
    content: 'IT-РЕШЕНИЯ IT-РЕШЕНИЯ IT-РЕШЕНИЯ';
    white-space: nowrap;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    left: calc(-100% - 2rem);
    text-align: right;
    display: flex;
    justify-content: flex-end;
  }
  &:before {
    content: 'IT-РЕШЕНИЯ IT-РЕШЕНИЯ IT-РЕШЕНИЯ';
    position: absolute;
    width: 100%;
    right: calc(-100% - 2rem);
    opacity: 0.5;
    white-space: nowrap;
  }
`;

export const AnimateTextToLeftToo = styled(AnimateTextToLeftOne)`
  &:after {
    content: 'ДЛЯ БИЗНЕСА ДЛЯ БИЗНЕСА ДЛЯ БИЗНЕСА';
  }
  &:before {
    content: ' ДЛЯ БИЗНЕСА ДЛЯ БИЗНЕСА ДЛЯ БИЗНЕСА';
    position: absolute;
    width: 100%;
    right: calc(-100% - 2rem);
    opacity: 0.5;
    white-space: nowrap;
  }
`;

export const TitleBottom = styled(Title)<TitleProps>`
  display: flex;
  transform: ${props => `translateX(${props.transformValue}%)`};
`;

export const AnimateTextToRight = styled.span<AnimateTextProps>`
  display: flex;
  position: relative;
  white-space: nowrap;
  justify-content: flex-end;
  transition: transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 1s,
    opacity 0.7s cubic-bezier(0.83, 0, 0.17, 1) 1s;
  // transform: ${props => (props.startAnimation ? '0' : 'translateX(-50%)')};
  opacity: ${props => (props.startAnimation ? '1' : '0')};
  &:after {
    content: 'IT-ПРОДУКТЫ IT-ПРОДУКТЫ IT-ПРОДУКТЫ';
    white-space: nowrap;
    width: 100%;
    opacity: 0.5;
    position: absolute;
    left: calc(-100% - 2rem);
    text-align: right;
    display: flex;
    justify-content: flex-end;
  }
  &:before {
    content: ' IT-ПРОДУКТЫ IT-ПРОДУКТЫ IT-ПРОДУКТЫ';
    position: absolute;
    //margin-left: -100%;
    width: 100%;
    right: calc(-100% - 2rem);
    opacity: 0.5;
    white-space: nowrap;
  }
  @media ${device.mobile} {
    margin-left: -50%;
  }
`;

export const ImagesContainer = styled.div<AnimateTextProps>`
  transition: transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 0.7s,
    opacity 0.5s cubic-bezier(0.83, 0, 0.17, 1) 0.7s;
  transform: ${props => (props.startAnimation ? '0' : 'translateY(20%)')};
  opacity: ${props => (props.startAnimation ? '1' : '0')};
  position: relative;
  width: 100%;
  height: calc(120vh + 62rem);
  z-index: 7;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media ${device.mobile} {
    height: calc(120vh + 10rem);
  }
  img {
    object-fit: contain;
    object-position: bottom;
    @media ${device.mobile} {
      object-fit: cover;
      object-position: top center;
      min-height: 80% !important;
    }
  }
`;

interface ImageContainerProps {
  opacityValue?: number;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

export const ImageContainerGreen = styled(ImageContainer)`
  top: 2px;
  z-index: 2;
  opacity: ${props =>
    props.opacityValue ? `${props.opacityValue / 100}` : '0'};
`;

export const BottomText = styled.div<ImageContainerProps>`
  font-size: 14rem;
  color: white;
  ${Container};
  position: relative;
  top: -10rem;
  @media ${device.mobile} {
    font-size: 4rem;
  }
`;

export const ClickToScroll = styled.a`
  position: fixed;
  left: ${sizes.paddingContainer};
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  @media ${device.mobile} {
    display: none;
  }
  bottom: 20px;
`;

export const ClickToContacts = styled.a`
  position: fixed;
  right: ${sizes.paddingContainer};
  width: 8rem;
  height: 9rem;
  background: white;
  bottom: 20px;
  border-radius: 1.6rem;
  overflow: hidden;
  cursor: pointer;
  z-index: 20;
  @media ${device.mobile} {
    display: none;
  }
`;

export const CodeImageContainer = styled.div`
  position: relative;
  height: 8rem;
  width: 8rem;
`;

export const CodeText = styled.p`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  top: -0.5rem;
  color: #000000;
  margin: 0 auto;
`;
