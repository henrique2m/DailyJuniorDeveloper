import styled from 'styled-components';

interface ButtonProps {
  size?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) =>
    props.size === 'big' ? 100 : props.size === 'small' ? 25 : 50}%;
  height: 4.8rem;

  background: #7059c1;
  margin: 1rem 0 1rem 0;
  border-radius: 5px;

  a {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    font-weight: bold;
    color: #fff !important;
    background: var(--color-background);
    transition: background 1s;
    border-radius: 5px;
  }

  a:hover {
    background: var(--text-small-color);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
