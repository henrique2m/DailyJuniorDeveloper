import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { Container } from './styles';

import nodejs from '../../assets/images/nodejs.png';
import ButtonLink from '../../components/ButtonLink';

export default function Article() {
  return (
    <Container>
      <Header />
      <article>
        <header>
          <p>
            <Link to="/">
              <MdArrowBack size={24} />
              Voltar
            </Link>
          </p>
          <h1>Node.js</h1>
          <small>Introdução ao Node.Js</small>
          <div>
            <strong>12/02/2021</strong>
          </div>
        </header>

        <main>
          <img src={nodejs} alt="nodejs" />

          <h2>O que é o Node.Js?</h2>
          <p>
            O Node.js é uma aplicação serve-side, que permite a execução do
            JavaScript de forma standalone, ou seja, não depende de um browser
            para rodar o JavaScript.
          </p>
          <h2>Principal Característica</h2>
          <p>
            Ter sua execução single-thread, logo, todas as requisições feitas a
            um servidor Node.Js são executada em uma única thread. Esse processo
            é chamado de Event Loop.
          </p>

          <ButtonLink
            type="button"
            link="https://www.opus-software.com.br/node-js/"
            title="Saiba mais..."
          />
        </main>
      </article>
    </Container>
  );
}
