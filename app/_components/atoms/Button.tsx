import React, {
	type ButtonHTMLAttributes,
	type FC,
	type PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";

const Button: FC<
	PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...rest }) => {
	return (
		<button className={twMerge("border p-2 rounded", className)} {...rest}>
			{children}
		</button>
	);
};

const Text: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
	children,
	...rest
}) => {
	return (
		<Button className="border-0" {...rest}>
			{children}
		</Button>
	);
};

export default Object.assign(Button, {
	Text,
});
