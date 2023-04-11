import styled from 'styled-components';
import { Container, ButtonGreen } from '../../mixins/mixins';
import { colors, device } from '../../variables/variables';

export const NotFoundPage = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(45deg, #3a86ff 55%, #8338ec);
`;

export const NotFoundPageContainer = styled.div`
  ${Container};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

export const Line = styled.div`
  position: absolute;
  top: 15rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  left: 2.4rem;
  right: 2.4rem;
`;

export const Button = styled.a`
  ${ButtonGreen};
  width: auto;
  padding: 0 5rem;
  @media ${device.mobile} {
    text-transform: none;
    font-size: 1.2rem;
    width: 100%;
    justify-content: center;
  }
`;

export const CountContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 2.4rem;
  right: 2.4rem;
  font-weight: 500;
  font-size: 6.4rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: white;
  display: flex;
  justify-content: space-between;
  transition: 0.4s all cubic-bezier(0.83, 0, 0.17, 1) 0.3s;
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
  //height: 9.6rem;
`;

export const Count = styled.div``;
