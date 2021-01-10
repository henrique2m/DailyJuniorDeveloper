import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  width: 100%;
  max-width: 40.68rem;
  min-width: 30rem;
  flex-direction: column;
  list-style: none;

  li {
    width: 100%;
    margin-bottom: 1rem;
  }

  li > div {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  li > div > strong {
    background: var(--color-container);
    width: 10rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;

    border-radius: 20px 20px 0 20px;
    margin-right: 1rem;
  }

  li > div > span {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    margin-right: -1.9rem;
    margin-bottom: -1.9rem;
    background: var(--color-container);
    z-index: 2;
  }

  li > div > div {
    width: 50%;
    border-left: 1px solid var(--color-border);
    padding-top: 10rem;
  }

  li > div > div a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: #000;
  }

  li > div > div a:hover {
    color: var(--text-small-color);
  }

  li > div > div aside {
    background: var(--color-container);
    min-height: 8.4rem;
    margin-left: 3rem;
    border-radius: 20px 20px 20px 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem;
  }

  li > div > div aside header h3 {
    font-size: 2.4rem;
    font-weight: bold;
  }

  li > div > div aside header small {
    width: 100%;
    display: flex;
    color: var(--text-small-color);
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  li > div > div aside footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
