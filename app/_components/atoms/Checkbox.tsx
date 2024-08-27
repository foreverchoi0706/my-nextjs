import { type InputHTMLAttributes, type PropsWithChildren, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Checkbox = forwardRef<
	HTMLInputElement,
	PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
>(({ className, ...rest }, ref) => {
	return (
		<input
			type="checkbox"
			ref={ref}
			className={twMerge("h-4 w-4 bg-gray-100", className)}
			{...rest}
		/>
	);
});

export default Checkbox;
