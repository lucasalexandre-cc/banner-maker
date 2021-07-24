import React from 'react';
import styled from 'styled-components';

const DefaultDialogContainer: React.FC = ({ children }) => (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
);


const Container = styled.div`
width: 100%;
min-height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 95%;
max-width: 720px;
background: #fff;
border-radius: 5px;
padding: 30px 15px 20px;
background-color: #FFF;
box-shadow: 1px 1px 6px rgba(0,0,0,.4);
`;

export default DefaultDialogContainer;




