export default interface ButtonProps {
  className?: string;
  type: "primary" | "secondary" | "disabled";
  size: "default" | "compact";
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
}
