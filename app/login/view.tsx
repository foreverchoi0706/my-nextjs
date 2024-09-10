"use client";
import { setCookie } from "@/app/_actions";
import Button from "@/app/_components/atoms/Button";
import Form from "@/app/_components/molecules/Form";
import { ACCESS_TOKEN } from "@/app/_constants";
import type { ILoginForm } from "@/app/_types";
import { useRouter, useSearchParams } from "next/navigation";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

const View: FC = () => {
	const { replace } = useRouter();
	const searchParams = useSearchParams();
	const form = useForm<ILoginForm>();

	const handleSubmitLoginForm: SubmitHandler<ILoginForm> = ({ id, password }) => {
		const url = searchParams.get("url");
		console.log(url);
		setCookie(ACCESS_TOKEN, id + password).then(() => replace(url || "/"));
	};

	return (
		<main>
			<Form<ILoginForm>
				autoComplete="off"
				className="flex flex-col gap-2"
				form={form}
				onSubmit={form.handleSubmit(handleSubmitLoginForm)}
			>
				<Form.Input<ILoginForm>
					{...form.register("id", {
						required: true,
					})}
				/>
				<Form.Input<ILoginForm>
					{...form.register("password", {
						required: true,
					})}
					type="password"
				/>
				<Button type="submit">LOGIN</Button>
			</Form>
		</main>
	);
};

export default View;
