import styled from 'styled-components';

export const Container = styled.header`
  max-width: 40.68rem;
  min-width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-container);
  border-radius: 1.8rem;
  padding: 2rem;
  margin-top: 3rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  section h1 {
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: 'Roboto';
    font-size: 3.6rem;
    font-weight: bold;
  }

  section div {
    display: flex;
    flex-direction: row;
    border-top: 1px solid var(--color-border);
    padding: 1rem;
    margin-top: 1rem;
    height: 100%;
  }

  section div img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 1px solid var(--color-border);
  }

  section div p {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  section div p strong {
    font-size: 1.8rem;
    font-weight: bold;
  }

  section div p span {
    color: var(--text-small-color);
    font-size: 1.2rem;
    text-align: justify;
    word-wrap: break-word;
  }

  > div {
    width: 1rem;
    height: 1rem;
    border: solid 4rem transparent;
    border-bottom: solid 4rem #fff;
    border-top: none;
    margin-bottom: -4rem;
    transform: rotate(180deg);
  }
`;
