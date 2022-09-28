import styled, { keyframes } from "styled-components";
import { LoaderTypes } from ".";

const mainColor = "32, 98, 176";
const transparentColor = "rgba(255, 255, 255, 0)";

const animation = keyframes`
 0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em ${transparentColor}, 1.8em -1.8em 0 0em rgba(${mainColor}, 0.2), 2.5em 0em 0 0em rgba(${mainColor}, 0.2), 1.75em 1.75em 0 0em rgba(${mainColor}, 0.2), 0em 2.5em 0 0em rgba(${mainColor}, 0.2), -1.8em 1.8em 0 0em rgba(${mainColor}, 0.2), -2.6em 0em 0 0em rgba(${mainColor}, 0.5), -1.8em -1.8em 0 0em rgba(${mainColor}, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${mainColor}, 0.7), 1.8em -1.8em 0 0em ${transparentColor}, 2.5em 0em 0 0em rgba(${mainColor}, 0.2), 1.75em 1.75em 0 0em rgba(${mainColor}, 0.2), 0em 2.5em 0 0em rgba(${mainColor}, 0.2), -1.8em 1.8em 0 0em rgba(${mainColor}, 0.2), -2.6em 0em 0 0em rgba(${mainColor}, 0.2), -1.8em -1.8em 0 0em rgba(${mainColor}, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(${mainColor}, 0.5), 1.8em -1.8em 0 0em rgba(${mainColor}, 0.7), 2.5em 0em 0 0em ${transparentColor}, 1.75em 1.75em 0 0em rgba(${mainColor}, 0.2), 0em 2.5em 0 0em rgba(${mainColor}, 0.2), -1.8em 1.8em 0 0em rgba(${mainColor}, 0.2), -2.6em 0em 0 0em rgba(${mainColor}, 0.2), -1.8em -1.8em 0 0em rgba(${mainColor}, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${mainColor}, 0.2), 1.8em -1.8em 0 0em rgba(${mainColor}, 0.5), 2.5em 0em 0 0em rgba(${mainColor}, 0.7), 1.75em 1.75em 0 0em ${transparentColor}, 0em 2.5em 0 0em rgba(${mainColor}, 0.2), -1.8em 1.8em 0 0em rgba(${mainColor}, 0.2), -2.6em 0em 0 0em rgba(${mainColor}, 0.2), -1.8em -1.8em 0 0em rgba(${mainColor}, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(${mainColor}, 0.2), 1.8em -1.8em 0 0em rgba(${mainColor}, 0.2), 2.5em 0em 0 0em rgba(${mainColor}, 0.5), 1.75em 1.75em 0 0em rgba(${mainColor}, 0.7), 0em 2.5em 0 0em ${transparentColor}, -1.8em 1.8em 0 0em rgba(${mainColor}, 0.2), -2.6em 0em 0 0em rgba(${mainColor}, 0.2), -1.8em -1.8em 0 0em rgba(${mainColor}, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${mainColor}, 0.2), 1.8em -1.8em 0 0em rgba(${mainColor}, 0.2), 2.5em 0em 0 0em rgba(${mainColor}, 0.2), 1.75em 1.75em 0 0em rgba(${mainColor}, 0.5), 0em 2.5em 0 0em rgba(${mainColor}, 0.7), -1.8em 1.8em 0 0em ${transparentColor}, -2.6em 0em 0 0em rgba(${mainColor}, 0.2), -1.8em -1.8em 0 0em rgba(${mainColor}, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(${mainColor}, 0.2), 1.8em -1.8em 0 0em rgba(${mainColor}, 0.2), 2.5em 0em 0 0em rgba(${mainColor}, 0.2), 1.75em 1.75em 0 0em rgba(${mainColor}, 0.2), 0em 2.5em 0 0em rgba(${mainColor}, 0.5), -1.8em 1.8em 0 0em rgba(${mainColor}, 0.7), -2.6em 0em 0 0em ${transparentColor}, -1.8em -1.8em 0 0em rgba(${mainColor}, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${mainColor}, 0.2), 1.9em -1.8em 0 0em rgba(${mainColor}, 0.2), 2.5em 0em 0 0em rgba(${mainColor}, 0.2), 1.75em 1.75em 0 0em rgba(${mainColor}, 0.2), 0em 2.5em 0 0em rgba(${mainColor}, 0.2), -1.8em 1.8em 0 0em rgba(${mainColor}, 0.5), -2.6em 0em 0 0em rgba(${mainColor}, 0.7), -1.8em -1.8em 0 0em ${transparentColor};
    }
`;

export const LoaderStyle = styled.div`
  font-size: 10px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${animation} 0.6s infinite ease;
  transform: translateZ(0);
`;

export const LoaderParentStyle = styled.div<LoaderTypes>`
  grid-column: ${({ column }) => (column ? `${column}` : "initial")};
  display: grid;
  justify-content: center;
  align-items: center;
`;
