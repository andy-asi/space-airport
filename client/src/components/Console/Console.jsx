import React from 'react';
import { ConsoleStyled } from './styles';
import { useSelector } from 'react-redux';

function Console() {
  const { capsules, status, error, mode, landingPad } = useSelector(state => state.spaceState);

  if (status === "loading") return <ConsoleStyled><div>loading...</div></ConsoleStyled>;
  if (status === "failed") return <ConsoleStyled><div>{error}</div></ConsoleStyled>;

  return (
    <ConsoleStyled>
      <pre>
        {JSON.stringify(mode === "capsules" ? capsules : landingPad, null, 2)}
      </pre>
    </ConsoleStyled>
  )
}

export default Console;
