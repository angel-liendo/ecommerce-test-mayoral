import styled from 'styled-components';
import { device } from '../../style/deviceMediaQuerys';

export const SearchBarStyle = styled.div`
  display: grid;
  grid-template-columns: 110.5rem 28.7rem;
  justify-content: center;
  gap: 4rem;

  ${device.tabBetweenLandAndDesktop} {
    grid-template-columns: 0.61fr 0.2fr;
    justify-content: space-between;
  }

  ${device.phone} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    align-content: center;
    gap: 2rem;
  }

  ${device.bigDesktop} {
    grid-template-columns: 110.5rem 28.7rem;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: end;
    gap: 30px;

    button:nth-child(1) {
      margin-right: 16px;
    }

    ${device.phone} {
      grid-row: 1 / 2;
      justify-content: center;
    }
  }

  & button figure img {
    transition: 0.3s ease-in-out;
  }
`;
