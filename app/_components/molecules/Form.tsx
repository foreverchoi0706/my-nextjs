import AtomInput from "@/app/_components/atoms/Input";
import type { FormHTMLAttributes, InputHTMLAttributes, PropsWithChildren } from "react";
import {
	type FieldValues,
	FormProvider,
	type Path,
	type RegisterOptions,
	type UseFormReturn,
	useFormContext,
} from "react-hook-form";

const Form = <T extends FieldValues>({
	children,
	form,
	...rest
}: PropsWithChildren<FormHTMLAttributes<HTMLFormElement> & { form: UseFormReturn<T> }>) => {
	return (
		<FormProvider {...form}>
			<form {...rest}>{children}</form>
		</FormProvider>
	);
};

const Input = <T extends FieldValues>({
	name,
	options,
	...rest
}: InputHTMLAttributes<HTMLInputElement> & {
	name: Path<T>;
	options?: RegisterOptions<T>;
}) => {
	const { register } = useFormContext<T>();
	return <AtomInput {...rest} {...register(name, options)} />;
};

export default Object.assign(Form, {
	Input,
});
