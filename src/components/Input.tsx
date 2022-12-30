import React, { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";

type InputProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
};

const Input = ({ onChange, onKeyDown, value, placeholder }: InputProps) => {
  return <StyledInput onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} value={value} />;
};

const StyledInput = styled.input`
  height: 30px;
  width: 200px;
  outline: 0;

  margin: 0 20px;
`;

export default Input;
