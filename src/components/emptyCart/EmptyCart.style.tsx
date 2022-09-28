import styled from "styled-components";

export const EmptyCartStyle = styled.span`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  justify-items: center;
  align-content: center;
  gap: 3rem;
  text-align: center;

  & > span:nth-child(2) {
    font-size: 2rem;
    color: var(--color-dark);
  }

  & > figure:nth-child(1) > img:nth-child(1) {
    width: 9rem;
    opacity: 0.2;
  }
`;
