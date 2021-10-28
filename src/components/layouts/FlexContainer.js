import React from "react";

const FlexContainer = ({
  flexDirection,
  justifyContent,
  alignItems,
  wrap,
  width,
  height,
  heightMinus,
  children,
  mediaQuery,
}) => {
  const styles = {
    display: "flex",
    flexDirection: (() => {
      return flexDirection !== undefined ? flexDirection : "row";
    })(),
    justifyContent: (() => {
      return justifyContent !== undefined ? justifyContent : "start";
    })(),
    alignItems: (() => {
      return alignItems !== undefined ? alignItems : "stretch";
    })(),
    flexWrap: (() => {
      return wrap !== undefined ? wrap : "nowrap";
    })(),
    width: (() => {
      return width !== undefined ? width : "100%";
    })(),
    height: (() => {
      if (heightMinus !== undefined) {
        return heightMinus;
      } else if (height !== undefined) {
        return height;
      } else {
        return "auto";
      }
    })(),
  };

  return (
    <div className={`flex-container ${mediaQuery}`} style={{ ...styles }}>
      {children}
    </div>
  );
};

export default FlexContainer;
