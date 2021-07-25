import React from 'react';
import styled from 'styled-components';

import { Header } from 'modules/shared/components';
import { LoggedRouter } from 'modules/shared/routes';
import RootProviders from 'modules/shared/providers/RootProviders';

const App: React.FC = () => {

  const userLogged = true;
  return (
    <RootProviders>
      <Container>
        <Header />
        { userLogged && <LoggedRouter /> }
      </Container>
    </RootProviders>
  );
}

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

export default App;
