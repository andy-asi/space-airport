import React from 'react';
import GlobalStyle from '../../theme';
import { Container, Application } from './styles';
import Console from '../../components/Console/Console';
import Control from '../../components/Control/Control';

function App() {
  return (
    <>
      <Container>
        <Application>
          <Console />
          <Control />
        </Application>
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App;
