import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Gihub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8108336?s=400&u=3471f1239a7f9cc873a0ab8b089a9ecae1306b3c&v=4"
            alt="Santosjn"
          />
          <div>
            <strong>base-react</strong>
            <p>Repository description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8108336?s=400&u=3471f1239a7f9cc873a0ab8b089a9ecae1306b3c&v=4"
            alt="Santosjn"
          />
          <div>
            <strong>base-react</strong>
            <p>Repository description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8108336?s=400&u=3471f1239a7f9cc873a0ab8b089a9ecae1306b3c&v=4"
            alt="Santosjn"
          />
          <div>
            <strong>base-react</strong>
            <p>Repository description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
