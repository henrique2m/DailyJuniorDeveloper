import React from 'react';
import { MdToday } from 'react-icons/md';
import { Container } from './styles';

interface PropsActivity {
  date: string;
  title: string;
  description: string;
}

const Activity: React.FC<PropsActivity> = ({ date, title, description }) => {
  return (
    <Container>
      <li>
        <div>
          <strong>{date}</strong>
          <span></span>
          <div>
            <aside>
              <header>
                <h3>{title}</h3>
                <small> {description} </small>
              </header>

              <footer>
                <MdToday />
                <strong>{date}</strong>
              </footer>
            </aside>
          </div>
        </div>
      </li>
    </Container>
  );
};

export default Activity;
