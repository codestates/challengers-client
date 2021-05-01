import styled from "styled-components";

export const NameListContainer = styled.ul `
  display: flex;
  padding: 10px;
  font-size: 1.5rem;
  font-family: "Lobster", cursive;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;