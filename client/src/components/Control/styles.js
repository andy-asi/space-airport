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

  @media(max-width: 500px) {
    padding: 0 10px;
  }
`;

const Capsules = styled.button`
  background-color: #EEE;
  padding: 20px 30px;
  border-radius: 10px;
  border: 1px solid #999;
  cursor: pointer;

  &:hover {
    background-color: #DDD;
  }

  @media(max-width: 500px) {
    width: 100%;
    padding: 5px 12px;
  }
`;

const Input = styled.input`
  padding: 0 10px;
  height: 30px;

  @media(max-width: 500px) {
    width: 100%;
  }
`;

const LandingPad = styled.button`
  background-color: #EEE;
  padding: 20px 30px;
  border-radius: 10px;
  border: 1px solid #999;
  cursor: pointer;

  &:hover {
    background-color: #DDD;
  }

  &:disabled {
    border: 1px solid #EEE;
    cursor: not-allowed;
  }

  @media(max-width: 500px) {
    width: 100%;
    padding: 5px 12px;
  }
`;

export {
  ControlStyled,
  Capsules,
  Input,
  LandingPad,
};