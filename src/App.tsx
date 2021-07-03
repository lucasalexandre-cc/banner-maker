import React from 'react';
import styled from 'styled-components';

import { Header } from 'modules/shared/components';

const App: React.FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

export default App;
