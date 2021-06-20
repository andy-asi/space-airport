import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Application = styled.div`
  display: flex;
  height: 50vh;
  width: 50vw;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 15px;

  @media(max-width: 970px) {
    height: 100vh;
    width: 100vw;
    flex-direction: row;
  }
`;

export {
  Container,
  Application,
};