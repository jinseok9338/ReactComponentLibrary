import React from "react";
import "./App.css";
import ContainerWithTitleBar from "src/containers/containerWithTitleBar"
import { ContainerProps } from "./containers/containerWithTitleBar/type";


const ContainerWithTitleBarProps: ContainerProps = {
  TitleBarProps: {
    hasTitleBar:false
  },
  HTMLProps: {
    color:"#000"
  }
  
}

const App =():JSX.Element=> {
  return (
    <>
      <h1>Hello</h1>
      <ContainerWithTitleBar {...ContainerWithTitleBarProps} />
      </>
  );
}

export default App;
