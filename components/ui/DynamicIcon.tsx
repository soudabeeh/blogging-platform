import React, { CSSProperties } from "react";
import { iconComponents } from "../../public/assets/icons/globalIcons";

type DynamicIcon = {
  iconName: string;
  customClass?: CSSProperties | string;
  width?: number;
  height?: number;
  stroke?: string;
};
const DynamicIcon = ({
  iconName,
  customClass,
  width,
  height,
  stroke,
}: DynamicIcon) => {
  const IconComponent = iconComponents[iconName];

  if (!IconComponent) {
    return <span>Icon not found</span>;
  }

  return (
    <IconComponent
      customClass={customClass}
      width={width}
      height={height}
      stroke={stroke}
    />
  );
};

export default DynamicIcon;
