//@flow
import React from "react";

import LoadMore from "./LoadMore";
import Actors from "./Actors";
import ResultsCount from "./ResultsCount";
import AddingActor from "./AddingActor";

import styled from "styled-components";

const SideContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 400px;
  transform: translate(-50%, -50%);

  border: 3px solid #66c2ff;
  border-radius: 20px;
`;

const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  max-height: 100%;
  grid-template-columns: minmax(0, 1fr) 50px;
  max-width: 100%;
  height: 60px;

  border-bottom: 3px solid #66c2ff;
`;

function App() {
  return (
    <SideContainer>
      <HeaderContainer>
        <AddingActor />
        <ResultsCount />
      </HeaderContainer>

      <Actors />

      <LoadMore />
    </SideContainer>
  );
}

export default App;
