/* Container is div element that acts as a window. 
    You can pass in titleBar and titleBar props to make a title bar like window File Explorer
*/

import { motion } from "framer-motion";
import React from "react";
import StyledContainer from "../container/StyledContainer";
import StyledTitleBar from "./StyledTitleBar";
import { ContainerProps } from "./type";

const ContainerWithTitleBar = ({
  children,
    TitleBarProps: {
        hasTitleBar, ...TitleBarProps
  },
   MotionProps,
  ...props
}: ContainerProps) => {
  return hasTitleBar ? (
    <motion.div {...MotionProps}> 
    <StyledContainer {...props}>
      <StyledTitleBar {...TitleBarProps} />
      {children}
      </StyledContainer>
    </motion.div>
  ) : (
      <motion.div {...MotionProps} >
         <StyledContainer {...props}>{children}</StyledContainer>
     </motion.div >
  );
};

export default ContainerWithTitleBar;
