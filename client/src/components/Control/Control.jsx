import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';
import { ControlStyled, Capsules, Input, LandingPad } from './styles';
import { fetchCapsules, fetchLandingPad } from '../../redux/slices/space';

function Control() {
  const dispatch = useDispatch();
  const [padInput, setPadInput] = useState("");

  const landingPadClick = () => {
    dispatch(fetchLandingPad(padInput));
  }
  
  return (
    <ControlStyled>
      <Capsules onClick={() => dispatch(fetchCapsules())}>Capsules</Capsules>
      <Rocket />
      <Input type="text" placeholder="Landing Pad ID" value={padInput} onChange={(e) => setPadInput(e.target.value)} size="15" />
      <LandingPad onClick={landingPadClick} disabled={/[#$%&]/.test(padInput)}>Landing Pad</LandingPad>
    </ControlStyled>
  )
}

export default Control;
