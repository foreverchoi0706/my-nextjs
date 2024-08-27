import {
	type ElementType,
	type HTMLAttributes,
	type PropsWithChildren,
	createElement,
	forwardRef,
} from "react";

export type PropsWithAsChildren<
	T extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>,
> = {
	as?: ElementType;
} & PropsWithChildren<T>;

const Typography = forwardRef<HTMLElement, PropsWithAsChildren>(({ as = "div", ...rest }, ref) => {
	return createElement(as, {
		ref,
		...rest,
	});
});

export default Object.assign(Typography, {});
