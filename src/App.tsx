import React from 'react';
import styled from 'styled-components';

import { Header } from 'modules/shared/components';
import { LoggedRouter } from 'modules/shared/routes';

const App: React.FC = () => {

  const userLogged = true;
  return (
    <Container>
      <Header />
      { userLogged && <LoggedRouter /> }
    </Container>
  );
}

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

export default App;
