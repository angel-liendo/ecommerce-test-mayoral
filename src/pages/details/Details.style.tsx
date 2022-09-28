import styled from 'styled-components';
import { device } from '../../style/deviceMediaQuerys';

export const DetailsStyle = styled.div`
  display: grid;
  grid-template-columns: 62rem 62rem;
  grid-template-rows: 1fr;
  justify-content: center;
  padding: 5rem 3rem;
  gap: 3rem;

  ${device.tabBetweenLandAndDesktop} {
    grid-template-columns: 1fr 1fr;
    justify-content: initial;
  }

  ${device.phone} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  ${device.miniPhone} {
    padding: 0 8px 5rem 8px;
  }

  & > div:nth-child(2) {
    display: grid;
    grid-template-rows: min-content;
    justify-self: start;
    gap: 2rem;
  }

  & > div:nth-child(2) > div:nth-child(2) {
    & > span:nth-child(1) {
      margin: 0 1rem 1rem 0;
    }
    & > span {
      display: inline-block;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }

  & > div:nth-child(2) > span:nth-child(1) {
    font-size: 2.4rem;
  }
`;
