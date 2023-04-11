import styled from 'styled-components';
import { ButtonGreen, Container } from '../../../mixins/mixins';
import { device } from '../../../variables/variables';

export const Header = styled.header`
  height: 8rem;
  width: 100%;
  position: fixed;
  z-index: 10;
  backdrop-filter: blur(16px);
  @media ${device.mobile} {
    height: 5.6rem;
  }
`;

export const HeaderContainer = styled.div`
  ${Container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  @media ${device.mobile} {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIconContainer = styled.div`
  height: 3.2rem;
  width: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.div`
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #ffffff;
  margin-left: 1.6rem;
  text-transform: uppercase;
`;

export const Menu = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    display: none;
  }
`;

export const HeaderItem = styled.a`
  position: relative;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-right: 3rem;
  &:last-child {
    margin-right: 0;
  }
  &.menu-link-active:before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    top: 9px;
    left: -8px;
    border-radius: 50%;
    background: rgba(219, 255, 0, 1);
  }
`;

export const HeaderButton = styled.div`
  ${ButtonGreen};
  height: 3.2rem;
  border-radius: 0.4rem;
  width: 18rem;
  text-transform: none;
  font-size: 1.4rem;
  justify-content: center;
`;
