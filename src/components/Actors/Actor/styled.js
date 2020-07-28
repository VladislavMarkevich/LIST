import styled from "styled-components";

export const ActorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DisplayValueContainer = styled.div`
  flex: 0 1 auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const RemoveIcon = styled.div`
  flex: 0 0 auto;

  background-color: red;
  width: 10px;
  height: 10px;
  margin: 0 0 0 5px;

  cursor: pointer;
`;

export const InputContainer = styled.input.attrs({ autoFocus: true })`
  font-size: 21px;
  width: 100%;
  line-height: 1;

  outline: none;
`;
