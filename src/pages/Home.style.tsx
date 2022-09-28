import styled from 'styled-components';
import { device } from '../style/deviceMediaQuerys';

export const HomeStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9rem 1fr;
  padding: 0 3rem 5rem 3rem;

  ${device.phone} {
    grid-template-rows: 15rem 1fr;
  }
  ${device.miniPhone} {
    padding: 0 8px 5rem 8px;
  }
`;
