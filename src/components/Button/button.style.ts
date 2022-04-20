import { styled } from "@stitches/react";

const StyledButton = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "4px",
  border: "1px solid transparent",

  fontFamily: "DM Sans, sans-serif",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "36px",
  transition: "250ms",

  variants: {
    type: {
      primary: {
        backgroundColor: "#25CE7B",
        color: "#FFFFFF",

        "&:hover": {
          backgroundColor: "#21B96F",
        },
        "&:focus": {
          backgroundColor: "#25CE7B",
          outline: "2px solid #167C4A",
          boxSizing: "content-box",
        },
        "&:active": {
          outline: "0px",
          backgroundColor: "#21B96F",
        },
      },
      secondary: {
        backgroundColor: "white",
        outline: "1px solid rgba(0, 0, 0, 0.2)",
        color: "#282828",

        "&:hover": {
          backgroundColor: "#F2F2F2",
        },
        "&:focus": {
          backgroundColor: "white",
          outline: "2px solid #64656A",
          boxSizing: "content-box",
        },
        "&:active": {
          backgroundColor: "#E6E6E6",
          outline: "1px solid rgba(0, 0, 0, 0.2)",
        },
      },
      disabled: {
        backgroundColor: "#F2F2F2",
        color: "#818181",
        outline: "1px solid rgba(0, 0, 0, 0.1)",
      },
    },
    size: {
      default: {
        padding: "6px 16px",
      },
      compact: {
        padding: "2px 16px",
      },
    },
  },
});

export default StyledButton;
