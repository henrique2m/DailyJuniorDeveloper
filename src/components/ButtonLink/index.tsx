import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link: string;
  title: string;
  size?: string;
}

const ButtonLink: React.FC<ButtonProps> = ({ link, title, size, ...rest }) => {
  return (
    <Button size={size} {...rest}>
      <a href={link} target="black">
        {title}
      </a>
    </Button>
  );
};

export default ButtonLink;
