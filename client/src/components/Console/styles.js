import styled from 'styled-components';

const ConsoleStyled = styled.div`
  height: 66.6666%;
  background-color: #EEE;
  padding: 10px;
  overflow-y: scroll;

  @media(max-width: 970px) {
    height: 100%;
    width: 66.6666%;
  }
  margin-bottom: 10px;
`;

export {
  ConsoleStyled,
};