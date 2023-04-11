import { css } from 'styled-components';
import { colors, device, sizes } from '../variables/variables';

export const Container = () => css`
  width: 100%;
  padding-left: ${sizes.paddingContainer};
  padding-right: ${sizes.paddingContainer};
  @media ${device.mobile} {
    padding-left: ${sizes.paddingContainerMobile};
    padding-right: ${sizes.paddingContainerMobile};
  }
`;

export const ButtonGreen = () => css`
  width: 100%;
  height: 6.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.8rem;
  background: ${colors.green};
  text-transform: uppercase;
  font-weight: 500;
  padding: 0 2.4rem;
  white-space: nowrap;
  font-size: 1.8rem;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.darkBlue};
  transition: 0.3s background-color ease-in-out, 0.3s color ease-in-out;
  &:hover {
    background: white;
  }
  @media ${device.mobile} {
    height: 4rem;
  }
`;

export const ButtonBlue = () => css`
  ${ButtonGreen};
  background: ${colors.blue};
  color: white;
  &:hover {
    color: ${colors.darkBlue};
    background: ${colors.green};
  }
`;
