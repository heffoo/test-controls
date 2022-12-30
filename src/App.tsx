import React from "react";
import HintsControl from "./components/hintsControl/HintsControl";
import styled from "styled-components";
import ControlHandler from "./components/buttonControls/ControlHandler";
import AlertControl from "./components/buttonControls/AlertControl";

function App() {
  return (
    <div>
      <ControlWrapper>
        <ControlHandler />
        <br />
        <AlertControl />
      </ControlWrapper>
      <hr />
      <HintsControlsWrapper>
        <HintsControl hints={3} />
        <HintsControl hints={10} />
      </HintsControlsWrapper>
    </div>
  );
}

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HintsControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default App;
