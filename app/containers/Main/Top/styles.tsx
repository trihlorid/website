import styled, { keyframes } from 'styled-components';
import { colors, device, sizes } from '../../../variables/variables';

export const Top = styled.div`
  background: ${colors.blue};
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
    font-size: 7.2rem;
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
export const AnimateTextToLeft = styled.span<AnimateTextProps>`
  display: flex;
  position: relative;
  justify-content: flex-end;
  transition: transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 1s,
    opacity 0.7s cubic-bezier(0.83, 0, 0.17, 1) 1s;
  // transform: ${props => (props.startAnimation ? '0' : 'translateX(50%)')};
  opacity: ${props => (props.startAnimation ? '1' : '0')};
  &:after {
    content: 'ЦИФРОВИЗАЦИЯ  ЦИФРОВИЗАЦИЯ ЦИФРОВИЗАЦИЯ ';
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
    content: 'ЦИФРОВИЗАЦИЯ  ЦИФРОВИЗАЦИЯ ЦИФРОВИЗАЦИЯ';
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
  justify-content: flex-end;
  transition: transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 1s,
    opacity 0.7s cubic-bezier(0.83, 0, 0.17, 1) 1s;
  // transform: ${props => (props.startAnimation ? '0' : 'translateX(-50%)')};
  opacity: ${props => (props.startAnimation ? '1' : '0')};
  &:after {
    content: 'Оборудования . Оборудования . Оборудования .';
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
    content: '. Оборудования . Оборудования . Оборудования ';
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
  height: 150vw;
  z-index: 7;
  @media ${device.mobile} {
    height: 150vh;
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

export const Hero = styled.div`
  height: 100vh;
  background-color: rgb(28, 99, 255);
  min-height: 800px;
  @media (max-width: 640px) {
    min-height: unset;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40% 50%;
  }
  padding: 2.4rem;
  height: 100%;
`;

export const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
export const LeftText = styled.h2`
  color: #fff;
  font-size: 10rem;
  z-index: 3;
  @media (max-width: 1200px) {
    font-size: 8rem;
  }
  @media (max-width: 1024px) {
    font-size: 6rem;
  }
  @media (max-width: 640px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1450px) {
    font-size: 12rem;
  }
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  transform: translate3d(0px, 0px, 0px);
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  img {
    width: 90%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 1200px) {
    img {
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    height: 100%;
    justify-content: center;
  }
  &.test {
    width: 100%;
    height: 100%;
  }
`;
