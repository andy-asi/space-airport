import React from 'react';
import { ConsoleStyled, Error } from './styles';
import { useSelector } from 'react-redux';

function Console() {
  const { capsules, status, error, mode, landingPad } = useSelector(state => state.spaceState);

  if (status === "idle") return <ConsoleStyled><div>Click "Capsules" or enter landing pad (eg: LZ-4) then press "Landing Pad" to start.</div></ConsoleStyled>;
  if (status === "loading") return <ConsoleStyled><div>Loading...</div></ConsoleStyled>;
  if (status === "failed") return <ConsoleStyled><Error>{error}</Error></ConsoleStyled>;

  return (
    <ConsoleStyled>
      <pre>
        {JSON.stringify(mode === "capsules" ? capsules : landingPad, null, 2)}
      </pre>
    </ConsoleStyled>
  )
}

export default Console;
