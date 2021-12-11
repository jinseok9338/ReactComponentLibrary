import React from "react";

interface BoxProps {
  gridArea?: String; // row-span-2  takes 2 rows
  color?: String;
  icon?: String; // if it's image it doesn't require icon and color
  title: String;
  image?: String;
}

function Box({ gridArea, color, icon, title, image }: BoxProps) {
  return (
    <div className={`${gridArea} h-24 w-24 flex flex-col-reverse`}>
      <div>Hello</div>
    </div>
  );
}

export default Box;
