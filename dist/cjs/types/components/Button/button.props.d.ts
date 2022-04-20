/// <reference types="react" />
declare type ButtonProps = {
    className?: string;
    type: "primary" | "secondary" | "disabled";
    size: "default" | "compact";
    disabled?: boolean;
    children?: JSX.Element | JSX.Element[] | string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export default ButtonProps;
