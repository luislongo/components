import { styled } from "@stitches/react";

const StyledCheckbox = styled("button", {
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
        fill: "#9A9A9A",
        transition: "250ms",
      },
      false: {
        path: {
          fill: "#64656A",
          transition: "250ms",
        },
        "&:hover": {
          path: {
            fill: "#1EA562",
            transition: "250ms",
          },
        },
        "&:active": {
          path: {
            fill: "#25CE7B",
            transition: "250ms",
          },
        },
      },
    },
  },
});

export default StyledCheckbox;
