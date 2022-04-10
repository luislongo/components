import React from "react";
import "./button.css";

export interface ButtonProps {
  label: string;
  active: boolean;
}

const button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default button;
