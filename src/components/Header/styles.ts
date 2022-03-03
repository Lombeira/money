import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    h1 {
      margin-left: 1rem;
      color: white;
      font-family: 'Poppins';
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
