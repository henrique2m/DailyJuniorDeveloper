import React from 'react';
import { Container } from './styles';

import Author from '../../assets/images/Author.jpg';

export default function Header() {
  return (
    <Container>
      <section>
        <h1> Daily of a Junior Developer</h1>
        <div>
          <img src={Author} alt="Henrique Moreira" />
          <p>
            <strong> Henrique Moreira </strong>
            <span>
              Estou em busca da primeira oportunidade como desenvolvedor, tenho
              muita determinação, vontade de aprender e sou apaixonado por
              tecnologia. Gosto de encarar desafios, pois acredito que por meio
              deles podemos sair da nossa zona de conforto. Quando alguém me
              pergunta quais são meus sonhos, costumo responder, não tenho
              sonhos, uma vez que, o ato de sonhar remete a algo irreal ou
              aparentemente inalcançável. Gosto de traçar metas que me levem a
              um objetivo, algo que possa ser alcançado com esforço e dedicação,
              pois quando nos apaixonamos pelo processo, ele deixa de ser árduo,
              e passa a ser nosso diferencial.
            </span>
          </p>
        </div>
      </section>

      <div></div>
    </Container>
  );
}
