import styled, { css } from 'styled-components';
import { device } from '../../style/deviceMediaQuerys';
import { mainTransition } from '../../style/GlobalStyles';

export const CardStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20rem min-content 4.2rem min-content min-content;
  align-content: space-between;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: var(--border-radius-1);
  border: 2px solid hsla(222.4, 61.9%, 47.4%, 0.31);
  background-color: #f5f5f5;
  transition: ${mainTransition};
  z-index: 1;

  ${device.phone} {
    grid-template-rows: 12rem min-content 3.5rem min-content min-content;
    gap: 4px;
    padding: 6px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 19px 23px #00000047;
  }
`;

export const CardFigureImage = styled.figure`
  height: 100%;
  width: 100%;

  & img {
    object-fit: cover;
  }
`;

export const CardTitle = styled.span`
  width: 18rem;
  height: 20px;
  display: block;
  font-size: 1.35rem;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: auto;
  cursor: pointer;
  transition: ${mainTransition};

  &:hover {
    color: var(--color-primary);
  }

  ${device.phone} {
    width: 12rem;
  }
`;

export const CardPriceBoxStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const CardPriceStyle = styled.span<{ textDecorationLine: boolean }>`
  font-size: 1.4rem;

  ${({ textDecorationLine }) =>
    textDecorationLine
      ? css`
          text-decoration-line: line-through;
          color: #797979;
        `
      : css`
          ''
        `}
`;
export const CardDiscountPriceStyle = styled.span`
  font-size: 1.5rem;
  color: var(--color-red);
`;

export const MoreColorsBtn = styled.button`
  color: gray;
`;
