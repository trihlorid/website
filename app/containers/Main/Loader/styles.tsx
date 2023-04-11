import styled, { keyframes } from 'styled-components';
import { Container } from '../../../mixins/mixins';
import { colors, device } from '../../../variables/variables';

interface LoaderProps {
  remove: boolean;
}

export const Loader = styled.div<LoaderProps>`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #e6e8ea;
  transition: 0.8s transform cubic-bezier(0.83, 0, 0.17, 1) 0.7s;
  transform: ${props => (props.remove ? 'translateY(-100%)' : 'translateY(0)')};
`;

export const LoaderContainer = styled.div<LoaderProps>`
  ${Container};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

export const Line = styled.div<LoaderProps>`
  position: absolute;
  top: 15rem;
  height: 1px;
  background: rgba(7, 24, 43, 0.2);
  left: 2.4rem;
  right: 2.4rem;
  transition: 0.3s all cubic-bezier(0.83, 0, 0.17, 1) 0.2s;
  opacity: ${props => (props.remove ? '0' : '1')};
`;

const SquareAnimation = keyframes`
 0% {
   transform: scale(0.8);
 }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
`;

export const Square = styled.div<LoaderProps>`
  width: 2rem;
  height: 2rem;
  background: ${colors.blue};
  animation: ${SquareAnimation} 1s linear infinite both;
  transition: 0.3s all cubic-bezier(0.83, 0, 0.17, 1) 0.2s;
  opacity: ${props => (props.remove ? '0' : '1')};
`;

export const CountContainer = styled.div<LoaderProps>`
  position: absolute;
  bottom: 0;
  left: 2.4rem;
  right: 2.4rem;
  font-weight: 500;
  font-size: 6.4rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: ${colors.darkBlue};
  display: flex;
  justify-content: space-between;
  transition: 0.4s all cubic-bezier(0.83, 0, 0.17, 1) 0.3s;
  transform: ${props => (props.remove ? 'translateY(20%)' : 'translateY(0)')};
  opacity: ${props => (props.remove ? '0' : '1')};
  @media ${device.mobile} {
    display: block;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 140%;
    align-items: center;
    letter-spacing: -0.01em;
    color: #07182b;
    left: 1.2rem;
    right: 1.2rem;
    bottom: 1.2rem;
  }
`;

export const CountText = styled.div`
  heigth: 9.6rem;
`;

export const Count = styled.div``;
