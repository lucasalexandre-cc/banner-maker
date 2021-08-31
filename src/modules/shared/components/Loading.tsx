import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

import { colors } from 'modules/shared/styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ReactLoading
        type="bars"
        color={colors.mainOrange}
        height={300}
        width={100}
        className="snippet"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 30px 0;

  .snippet {
    margin: auto;
  }
`;

export default Loading;
