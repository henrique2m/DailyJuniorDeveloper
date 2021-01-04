import React from 'react';
import { Container } from './styles';

interface PropsYear {
  date: number;
}

const Year: React.FC<PropsYear> = ({ date }) => {
  return (
    <Container>
      <h2>{date}</h2>
    </Container>
  );
};

export default Year;
