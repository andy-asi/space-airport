import styled from 'styled-components';

const ControlStyled = styled.div`
  height: 33.3333%;
  border: 1px solid #999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 970px) {
    flex-direction: column;
    height: 100%;
    width: 33.333%;
  }
`;

const Capsules = styled.button`
  background-color: #EEE;
  padding: 20px 30px;
  border-radius: 10px;
  border: 1px solid #999;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 0 10px;
  height: 30px;
`;

const LandingPad = styled.button`
  background-color: #EEE;
  padding: 20px 30px;
  border-radius: 10px;
  border: 1px solid #999;
  cursor: pointer;
`;

export {
  ControlStyled,
  Capsules,
  Input,
  LandingPad,
};