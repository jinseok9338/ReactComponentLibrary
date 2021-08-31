/* */

export interface TitleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
    title?: string;
    hasTitleBar?:boolean
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  titleBar?: React.ReactNode;
  TitleBarProps: TitleBarProps;
}
