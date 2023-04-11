import styled from 'styled-components';
import { Container } from '../../../mixins/mixins';
import { colors, device } from '../../../variables/variables';

export const Contacts = styled.section`
  background: white;
  margin-top: auto;
  overflow-y: auto;
`;

export const ContactsContainer = styled.section`
  ${Container};
`;

export const ContactsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: auto;
`;

export const ContactItem = styled.li`
  padding: 6.4rem 0 0;
  margin: 0;
  list-style: none;
  border-bottom: 1px solid rgba(7, 24, 43, 0.2);
  transition: 0.3s border-color ease-in-out;
  cursor: pointer;
  @media ${device.mobile} {
    padding: 3.2rem 0 0;
  }

  @media ${device.noTouch} {
    &:hover {
      border-bottom: 1px solid rgba(7, 24, 43, 0);
    }
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
  @media ${device.mobile} {
    height: 10rem;
  }
`;
export const ItemText = styled.p`
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: ${colors.darkBlue};
  opacity: 0.6;
  @media ${device.mobile} {
    font-size: 1.2rem;
    margin-bottom: -2rem;
  }
`;

export const ItemName = styled.div`
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 140%;
  display: flex;
  align-items: center;
  transition: 0.3s all ease-in-out;
  color: ${colors.darkBlue};
  @media ${device.mobile} {
    font-size: 2.4rem;
  }
`;

export const IconLink = styled.span`
  width: 6.4rem;
  height: 6.4rem;
  margin-left: 1rem;
  position: relative;
`;

export const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: relative;
  transition: 0.3s transform ease-in-out;
  @media ${device.mobile} {
    min-width: 1.6rem;
    height: 1.6rem;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: ${colors.darkBlue};
  }
`;

export const AboutInner = styled.div`
  display: grid;
  padding: 9.6rem 0;
  grid-template-columns: 34% 66%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const Title = styled.h2`
  color: white;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.01em;
  opacity: 0.6;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #ffffff;
  max-width: 80.3rem;
`;

export const ContactLink = styled.a`
  align-items: center;
  position: relative;
  display: block;
  &:after {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    height: 0.8rem;
    background: ${colors.green};
    bottom: 0;
    left: -2.4rem;
    right: 2.4rem;
    opacity: 0;
    transition: 0.3s opacity ease-in-out;
  }
  @media ${device.noTouch} {
    &:hover ${Icon} {
      transform: translateX(-200%);
    }

    &:hover ${ItemName} {
      transform: translateX(4rem);
    }

    &:hover:after {
      opacity: 1;
    }
  }
`;
