/* Container is div element that acts as a window. 
    You can pass in titleBar and titleBar props to make a title bar like window File Explorer
*/

import React from "react";
import StyledContainer from "../container/StyledContainer";
import StyledTitleBar from "./StyledTitleBar";
import { ContainerProps } from "./type";

const Container = ({
  children,
    TitleBarProps: {
        hasTitleBar, ...TitleBarProps
  },
  ...props
}: ContainerProps) => {
  return hasTitleBar ? (
    <StyledContainer {...props}>
      <StyledTitleBar {...TitleBarProps} />
      {children}
    </StyledContainer>
  ) : (
    <StyledContainer {...props}>{children}</StyledContainer>
  );
};

export default Container;
