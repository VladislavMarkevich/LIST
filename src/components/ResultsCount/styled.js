//@flow
import styled from "styled-components";

export const ResultCountContainer = styled.div`
  font-size: 30px;
  color: #76a7cf;

  cursor: pointer;
`;

export const ResultCountWrapperContainer = styled.div`
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputContainer = styled.input.attrs({ type: "number", autoFocus: true })`
  width: 100%;
  height: 27px;
  background-color: transparent;
  border: none;

  color: #76a7cf;
  outline: none;
  text-align: center;
  font-size: 27px;
`;
