//@flow
import styled from "styled-components";
import Loader from "react-loader-spinner";

export const LoadMoreButtonContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 50px;

  border-top: 3px solid #66c2ff;
`;

export const DisplayValueContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #76a7cf;
  font-size: 25px;
  cursor: pointer;
`;

export const Spinner = styled(Loader).attrs({
  type: "ThreeDots",
  color: "#00BFFF",
  height: 30,
  width: 70,
})`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 0;
`;
