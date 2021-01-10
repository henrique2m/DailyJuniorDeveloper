import React from 'react';
import Header from '../../components/Header';
import Activity from '../../components/Activity';
import Year from '../../components/Year';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Year date={2021} />
      <Activity
        date="05/01/2021"
        title="Node.js"
        description="Introdução ao Node.Js"
      />
    </Container>
  );
}
