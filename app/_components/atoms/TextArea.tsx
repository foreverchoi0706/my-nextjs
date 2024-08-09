import { type PropsWithChildren, type TextareaHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const TextArea = forwardRef<
	HTMLTextAreaElement,
	PropsWithChildren<TextareaHTMLAttributes<HTMLTextAreaElement>>
>(({ className, ...rest }, ref) => {
	return <textarea ref={ref} className={twMerge("border p-2", className)} {...rest} />;
});

export default TextArea;
