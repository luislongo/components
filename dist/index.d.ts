/// <reference types="react" />
import { FC } from 'react';

declare type ButtonProps = {
    className?: string;
    type: "primary" | "secondary" | "disabled";
    size: "default" | "compact";
    disabled?: boolean;
    children?: JSX.Element | JSX.Element[] | string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

declare const Button: FC<ButtonProps>;

export { Button };
