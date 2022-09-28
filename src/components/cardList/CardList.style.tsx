import styled from 'styled-components';
import { device } from '../../style/deviceMediaQuerys';

export const CardListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min(220px, 100%), clamp(20rem, 100%, 35rem)));

  grid-template-rows: repeat(auto-fit, minmax(min(200px, 100%), 44rem));
  gap: 1rem;
  justify-content: center;

  ${device.tabBetweenLandAndDesktop} {
    justify-content: space-between;
  }

  ${device.betweenPcAndTabPort2} {
    grid-template-columns: repeat(auto-fit, minmax(min(245px, 100%), 1fr));
  }
  ${device.tabPort} {
    grid-template-columns: repeat(auto-fit, minmax(min(230px, 100%), 1fr));
  }
  ${device.phone} {
    grid-template-columns: repeat(2, minmax(min(80px, 100%), 1fr));
  }
  ${device.miniPhone} {
    justify-content: center;
    gap: 8px;
  }
`;
