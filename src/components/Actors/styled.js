//@flow
import styled from "styled-components";
import Loader from "react-loader-spinner";

export const ActorsContainer = styled.div`
  box-sizing: border-box;
  overflow: auto;
  position: relative;
  width: 100%;
  height: 290px;
  padding: 0 12px 0 0;

  border-top: 15px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 20px solid transparent;
  font-size: 23px;

  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: #66c2ff;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: white;
  }
`;

export const Spinner = styled(Loader).attrs({
  type: "ThreeDots",
  color: "#00BFFF",
  height: 100,
  width: 100,
})`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 0;
`;
