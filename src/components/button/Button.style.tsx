import styled, { css } from "styled-components";
import { device } from "../../style/deviceMediaQuerys";
import { ButtonTypes } from "../../types/Button";

export const ButtonStylesBase = css`
  width: 7rem;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-self: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 8px 5px;
  border: none;
  border-radius: 4px;
  color: var(--color-ligth);
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    filter: var(--brightness-1);
  }

  &:active {
    transform: translateY(3px);
  }

  &:focus {
    outline: none;
  }
`;

const backgroundColors: any = {
  primary: `var(--color-primary)`,
  sencondary: `var(--color-sencondary)`,
  ligth: `var(--color-ligth)`,
  dark: `var(--color-dark)`,
  transparent: "transparent",
};

export const ButtonIconStylesBase = css`
  width: 4rem;
  height: 4rem;
  display: grid;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0;
  transition: 0.3s ease-in-out;

  ${device.phone} {
    width: 3rem;
  }
`;

export const ButtonStyle = styled.button<ButtonTypes>`
  &,
  &:link,
  &:visited {
    ${ButtonStylesBase}
    background-color: ${({ theme }) => backgroundColors[theme]};
  }
`;

export const ButtonIconStyle = styled.button<ButtonTypes>`
  &,
  &:link,
  &:visited {
    ${ButtonStylesBase}
    ${ButtonIconStylesBase}
    background-color: ${({ theme }: ButtonTypes) => backgroundColors[theme]};

    ${({ active }) =>
      active
        ? css`
            & figure img {
              filter: contrast(31%);
              opacity: 0.8;
            }
          `
        : css`
            & figure img {
              filter: contrast(3%);
              opacity: 0.2;
            }
          `}
  }
`;
