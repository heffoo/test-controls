import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: string;
  background?: string;
};

const Button = ({ text, onClick, color, background }: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color || "black"}
      background={background || "lightgray"}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ color?: string; background?: string }>`
  height: 30px;
  margin: 5px;
  outline: 0;
  border: 1px solid gray;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }

  color: ${(props) => props.color};
  background: ${(props) => props.background};
`;

export default Button;
