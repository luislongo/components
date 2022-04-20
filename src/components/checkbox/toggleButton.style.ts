import { styled } from "@stitches/react";

const StyledToggleButton = styled("button", {
  width: "18px",
  height: "18px",
  margin: "3px",
  background: "white",
  display: "flex",
  border: 0,
  padding: 0,
  verticalAlign: "middle",

  variants: {
    disabled: {
      true: {
        "svg > *": {
          fill: "#9A9A9A",
          transition: "250ms",
        },
      },
      false: {
        "svg > *": {
          fill: "#64656A",
          transition: "250ms",
        },
        "&:hover": {
          "svg > *": {
            fill: "#1EA562",
            transition: "250ms",
          },
        },
        "&:active": {
          "svg > *": {
            fill: "#25CE7B",
            transition: "250ms",
          },
        },
      },
    },
  },
});

export default StyledToggleButton;
