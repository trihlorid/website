import styled from 'styled-components';
import { Container } from '../../mixins/mixins';
import { colors, device, sizes } from '../../variables/variables';

interface ModalProps {
  isClose: boolean;
}

export const Modal = styled.section<ModalProps>`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  opacity: ${props => (props.isClose ? '0' : '1')};
  visibility: ${props => (props.isClose ? 'hidden' : 'visible')};
  transition: 0.3s opacity ease-in-out, 0.3s visibility ease-in-out;
`;

export const ModalOverlay = styled.div`
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

export const ModalContainer = styled.div`
  width: 108.6rem;
  max-width: 90%;
  height: 100%;
  background: white;
  @media ${device.mobile} {
    width: 100%;
    max-width: 100%;
  }
`;

export const HeaderModal = styled.div`
  @media ${device.mobile} {
    height: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(7, 24, 43, 0.2);
    margin: 0 ${sizes.paddingContainerMobile};
  }
`;

export const ButtonClose = styled.a`
  position: absolute;
  top: 3rem;
  right: 2.4rem;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.01em;
  color: ${colors.darkBlue};
  opacity: 0.6;
  transition: 0.3s opacity ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media ${device.mobile} {
    position: static;
  }
`;
