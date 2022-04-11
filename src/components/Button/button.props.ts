export default interface ButtonProps {
  className?: string;
  label: string;
  type: "outlined" | "default";
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[];
}
