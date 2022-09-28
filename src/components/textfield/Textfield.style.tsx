import styled from "styled-components";
import { device } from "../../style/deviceMediaQuerys";

export const BoxInput = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  gap: 5px;
  position: relative;

  ${device.phone} {
    padding: 0 1rem;
  }

  label {
    transition: all 0.2s ease-in-out;
    grid-row: 1 / 2;
  }

  input {
    width: 100%;
    height: 4rem;
    background-color: transparent;
    border: 1px solid #969696;
    border-radius: 9px;
    padding: 10px 10px 10px 33px;
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;

    ${device.phone} {
      padding: 10px 10px 10px 35px;
    }

    &:active,
    &:focus {
      outline: none;
      border: 2px solid var(--color-primary);
    }

    &:focus ~ label {
      color: var(--color-primary);
    }
  }

  & > figure:nth-child(1) {
    width: 2rem;
    height: 2rem;
    opacity: 0.2;
    position: absolute;
    top: 9px;
    left: 6px;

    ${device.phone} {
      left: 16px;
    }
  }
`;
