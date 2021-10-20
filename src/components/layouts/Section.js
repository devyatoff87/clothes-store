import React from "react";

const Section = ({ children, pad, marg, height, heightMinus }) => {
  const styles = {
    paddingTop: pad.top,
    paddingBottom: pad.bottom,
    margninTop: marg.top,
    margninBottom: marg.bottom,
    position: "relative",
    width: 100 + "%",
    height: (() => {
      if (heightMinus !== undefined) {
        return heightMinus;
      } else if (height !== undefined) {
        return height;
      } else {
        return 100 + "%";
      }
    })(),
  };
  return <section className={styles}>{children}</section>;
};

export default Section;
