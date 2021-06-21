import styled from 'styled-components';

const ConsoleStyled = styled.div`
  height: 66.6666%;
  background-color: #EEE;
  padding: 10px;
  overflow-y: scroll;
  margin-bottom: 10px;

  @media(max-width: 970px) {
    height: 100%;
    width: 66.6666%;
  }

  pre {
    white-space: pre-wrap;
    margin: 0;
  }
`;

const Error = styled.p`
  color: red;
`;

export {
  ConsoleStyled,
  Error
};