import React from 'react';
import { MdToday } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
            <Link to="/article">
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
            </Link>
          </div>
        </div>
      </li>
    </Container>
  );
};

export default Activity;
