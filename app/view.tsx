"use client";
import { setCookie } from "@/app/_actions";
import Checkbox from "@/app/_components/atoms/Checkbox";
import Input from "@/app/_components/atoms/Input";
import Link from "next/link";
import React, { type ChangeEventHandler, type FC, useState, useTransition } from "react";
import { ITodo } from "@/app/_types";

interface IProps {
	doneList: string[];
	initialTodoList: ITodo[];
}

const View: FC<IProps> = ({ doneList, initialTodoList }) => {
	const doneSet = new Set<string>(doneList);
	const [todoList, setTodoList] = useState<ITodo[]>(initialTodoList);
	const [_, startTransition] = useTransition();

	const onChangeCheckBox: ChangeEventHandler<HTMLInputElement> = ({ target: { id } }) => {
		if (doneSet.has(id)) {
			doneSet.delete(id);
		} else {
			doneSet.add(id);
		}
		setCookie("doneList", doneSet.values());
	};

	const onChangeInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
		startTransition(() => {
			setTodoList(
				value
					? initialTodoList.filter(({ title }) => title.toLowerCase().includes(value))
					: initialTodoList,
			);
		});
	};

	return (
		<main className="flex flex-col gap-2">
			<Input onChange={onChangeInput} />
			<ul className="flex flex-col gap-2">
				{todoList.map(({ title, id }) => (
					<li className="bg-gray-400 border p-4 rounded flex justify-between items-center" key={id}>
						<Link
							className="text-white overflow-hidden text-nowrap text-ellipsis "
							href={`/about/${id}`}
						>
							{title}
						</Link>
						<Checkbox
							id={id.toString()}
							checked={doneSet.has(id.toString())}
							onChange={onChangeCheckBox}
						/>
					</li>
				))}
			</ul>
		</main>
	);
};

export default View;
