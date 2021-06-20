import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';
import { ControlStyled, Capsules, Input, LandingPad } from './styles';
import { fetchCapsules, fetchLandingPad } from '../../redux/slices/space';

function Control() {
  const dispatch = useDispatch();
  const [padInput, setPadInput] = useState("");

  return (
    <ControlStyled>
      <Capsules onClick={() => dispatch(fetchCapsules())}>
        Capsules
      </Capsules>
      <Rocket />
      <Input type="text" placeholder="text" value={padInput} onChange={(e) => setPadInput(e.target.value)} />
      <LandingPad onClick={() => dispatch(fetchLandingPad(padInput))}>
        LandingPad
      </LandingPad>
    </ControlStyled>
  )
}

export default Control;
