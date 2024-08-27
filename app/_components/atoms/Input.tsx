import { type InputHTMLAttributes, type PropsWithChildren, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Input = forwardRef<
	HTMLInputElement,
	PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
>(({ className, ...rest }, ref) => {
	return <input ref={ref} className={twMerge("rounded border p-2", className)} {...rest} />;
});

export default Input;
