import React from 'react';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';
import { ControlStyled, Capsules, Input, LandingPad } from './styles';

function Control() {
  return (
    <ControlStyled>
      <Capsules>
        Capsules
      </Capsules>
      <Rocket />
      <Input placeholder="text" />
      <LandingPad>
        LandingPad
      </LandingPad>
    </ControlStyled>
  )
}

export default Control;
