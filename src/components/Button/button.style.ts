import styled, { css } from "styled-components";
import ButtonProps from "./button.props";

const defaultButton = (props: ButtonProps) => {
  if (props.type == "default") {
    return css`
      color: aliceblue;
      background-color: #f89621;
      border: 2px solid #f89621;

      &:hover {
        background-color: #f3722c;
        border: 2px solid #f3722c;
      }
      &:active {
        background-color: #d15d28;
        border: 2px solid #d15d28;
      }
    `;
  }
};

const outlinedButton = (props: ButtonProps) => {
  if (props.type == "outlined") {
    return css`
      color: #f89621;
      border: 2px solid #f89621;
      background-color: transparent;

      &:hover {
        color: aliceblue;
        background-color: #f3722c;
        border: 2px solid #f3722c;
      }
      &:active {
        border: 2px solid #d15d28;
        background-color: #d15d28;
      }
    `;
  }
};

const disabledButton = (props: ButtonProps) => {
  if (props.disabled) {
    return css`
      color: #ffffff;
      border: 2px solid #f89621;
      background-color: transparent;
    `;
  }
};

const backgroundColor = (props: ButtonProps) => {
  if (props.disabled) {
    return css`
      color: coral;
    `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  font-weight: 600;
  transition: 500ms;
  padding: 10px;
  margin: 10px;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => backgroundColor(props)};
`;

export default StyledButton;
