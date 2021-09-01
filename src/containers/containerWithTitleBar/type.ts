/* */

import { MotionProps } from "framer-motion";



export interface TitleBarProps  {
  children?: React.ReactNode;
    title?: string;
  hasTitleBar?: boolean
  HTMLProps?: React.HTMLProps<HTMLDivElement>
 
}

export interface ContainerProps {
  children?: React.ReactNode;
  TitleBarProps: TitleBarProps;
  MotionProps?: MotionProps;
  HTMLProps?: React.HTMLProps<HTMLDivElement>
}
