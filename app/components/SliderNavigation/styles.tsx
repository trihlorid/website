import styled from 'styled-components';
import { colors } from '../../variables/variables';

interface NavigationContainerProps {
  theme?: 'black' | 'white';
}

export const NavigationContainer = styled.div<NavigationContainerProps>`
  display: flex;
  align-items: center;
  width: 12.8rem;
  height: 6.4rem;
  justify-content: space-between;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 6.4rem;
    background: ${props =>
      props.theme === 'white'
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(7, 24, 43, 0.2)'};
    top: 0;
    left: 6.4rem;
  }
`;

interface ButtonNavProps {
  type: 'prev' | 'next';
  theme?: 'black' | 'white';
}

export const ButtonNav = styled.div<ButtonNavProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${colors.green};
    z-index: 1;
    opacity: 0;
    transition: 0.3s opacity ease-in-out;
  }
  svg {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: ${props =>
      props.theme === 'white' ? 'white' : `${colors.darkBlue}`};
    position: relative;
    z-index: 2;
    transition: 0.3s fill ease-in-out;
    transform: ${props => (props.type === 'prev' ? 'rotate(180deg)' : 'none')};
  }
  &.buttonNavDisabled {
    pointer-events: none;
    &:after {
      opacity: 0;
    }
    svg {
      fill: ${props =>
        props.theme === 'white'
          ? 'rgba(255, 255, 255, 0.2)'
          : 'rgba(7, 24, 43, 0.2)'};
    }
  }
  &:hover {
    &:after {
      opacity: 1;
    }
    svg {
      fill: ${colors.darkBlue};
    }
  }
`;
