import { ReactNode } from "react";

interface WindowThemeLayout {
  children?: ReactNode;
}

const WindowThemeLayout = ({ children }: WindowThemeLayout) => {
  return (
    <div className="flex ">
      <div className="flex-auto h-screen md:w-4/5 w-96 bg-green-400">
        {children}
      </div>
      <div className="flex-auto h-screen md:w-1/5 w-24  bg-green-400"></div>
    </div>
  );
};

export default WindowThemeLayout;
