import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  overflow: auto;

  article {
    width: 100%;
    max-width: 90rem;
    display: flex;
    flex-direction: column;
    background: var(--color-container);
    margin-top: 3rem;
    border-radius: 20px;
    padding: 1rem;
  }

  article header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.5rem;
  }

  article header p {
    width: 100%;
  }
  article header p a {
    width: 10rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff !important;
    background: var(--color-background);
    padding: 2rem;
    border-radius: 5px;
  }

  a,
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: var(--text-small-color);
  }

  article header h1 {
    margin-top: 2rem;
    font-size: 4.8rem;
    font-weight: bold;
  }

  article header small {
    font-size: 1.4rem;
    color: var(--text-small-color);
  }

  article header div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  article main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  article main img {
    width: 20rem;
    height: 20rem;
    border: 1px solid var(--color-border);
    border-radius: 50%;
  }

  article main h2 {
    padding: 10px 0 10px 0;
  }

  article main p {
    font-size: 1.4rem;
    text-align: center;
  }
`;
