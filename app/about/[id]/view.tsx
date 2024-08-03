"use client";
import { getCookie, setCookie } from "@/app/_actions";
import Typography from "@/app/_components/atoms/Typography";
import type { ITodo } from "@/app/about/[id]/page";
import React, { type FC, type MouseEventHandler, useEffect } from "react";

import Button from "@/app/_components/atoms/Button";
import Form from "@/app/_components/molecules/Form";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";

interface ISaveMemoForm {
	memo: string;
}

interface IProps {
	doneList: string[];
	todo: ITodo;
	memo: string;
}

const View: FC<IProps> = ({ todo, doneList, memo }) => {
	const id = todo.id.toString();
	const todoSet = new Set<string>(doneList);
	const form = useForm<ISaveMemoForm>({
		defaultValues: { memo },
	});

	const onSubmitSaveMemoForm: SubmitHandler<ISaveMemoForm> = (saveMemoForm) => {
		setCookie(id, saveMemoForm.memo);
	};

	const onClickButton: MouseEventHandler<HTMLButtonElement> = () => {
		if (todoSet.has(id)) {
			todoSet.delete(id);
		} else {
			todoSet.add(id);
		}
		setCookie("doneList", todoSet.values());
	};

	return (
		<main className="flex flex-col gap-2">
			<Typography>{todo.title}</Typography>
			<p>{todo.description}</p>
			<Form<ISaveMemoForm>
				onSubmit={form.handleSubmit(onSubmitSaveMemoForm)}
				autoComplete="off"
				className="flex flex-col gap-2"
				form={form}
			>
				<Form.Input<ISaveMemoForm>
					name="memo"
					className="w-full"
					options={{
						required: true,
					}}
				/>
				<div className="flex gap-2">
					<Button type="button" className="flex-grow" onClick={onClickButton}>
						{todoSet.has(id) ? "UNDO" : "DONE"}
					</Button>
					<Button type="submit" className="flex-grow">
						SAVE MEMO
					</Button>
				</div>
			</Form>
			<Link className="flex-grow" href="/">
				<Button className="w-full">LIST</Button>
			</Link>
		</main>
	);
};

export default View;
