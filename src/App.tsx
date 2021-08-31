import React, { useEffect } from 'react';
import styled from 'styled-components';
import ptBr from 'date-fns/locale/pt-BR';
import { registerLocale } from 'react-datepicker';

import { Header } from 'modules/shared/components';
import { Routes } from 'modules/shared/routes';
import RootProviders from 'modules/shared/providers/RootProviders';

const App: React.FC = () => {
  useEffect(() => {
    registerLocale('pt-br', ptBr);
  }, []);

  return (
    <RootProviders>
      <Container>
        <Header />
        <Routes />
      </Container>
    </RootProviders>
  );
};

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

export default App;
