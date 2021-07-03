import React from 'react';
import styled from 'styled-components';

const Banner: React.FC = () => {
  return (
    <Container>
      <Name>Banner 01</Name>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 20px;
  border: 1px solid black;
`;

const Name = styled.div`
  font-weight: bold;
`;

export default Banner;
