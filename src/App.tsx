import React from "react";
import "./App.css";
import HintsControl from "./components/hintsControl/HintsControl";
import styled from "styled-components";
import ControlHandler from "./components/button-controls/ControlHandler";
import AlertControl from "./components/button-controls/AlertControl";

function App() {
  return (
    <div>
      <ControlWrapper>
        <ControlHandler />
        <hr style={{ width: "100%" }} />
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
