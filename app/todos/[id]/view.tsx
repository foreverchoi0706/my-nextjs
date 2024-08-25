"use client";
import { setCookie } from "@/app/_actions";
import Typography from "@/app/_components/atoms/Typography";
import React, { type FC, type MouseEventHandler } from "react";

import Button from "@/app/_components/atoms/Button";
import Form from "@/app/_components/molecules/Form";
import type { ITodo, ITodoMemoForm } from "@/app/_types";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";

interface IProps {
	doneList: string[];
	todo: ITodo;
	memo: string;
}

const View: FC<IProps> = ({ todo, doneList, memo }) => {
	console.log(todo);
	const id = todo.id.toString();
	const todoSet = new Set<string>(doneList);
	const form = useForm<ITodoMemoForm>({
		defaultValues: { memo },
	});

	const onSubmitSaveMemoForm: SubmitHandler<ITodoMemoForm> = (saveMemoForm) => {
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
			<Form<ITodoMemoForm>
				onSubmit={form.handleSubmit(onSubmitSaveMemoForm)}
				autoComplete="off"
				className="flex flex-col gap-2"
				form={form}
			>
				<Form.TextArea<ITodoMemoForm> name="memo" className="h-96" options={{ required: "필수" }} />
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
