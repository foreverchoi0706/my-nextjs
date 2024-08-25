import fetcher from "@/app/_libs/fetcher";
import type { ITodo } from "@/app/_types";
import View from "@/app/view";
import { Effect } from "effect";
import type { NextPage } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const Page: NextPage = async () => {
	const cookieStore = cookies();
	const doneList = JSON.parse<string[]>(cookieStore.get("doneList")?.value || "[]");
	return fetcher
		.get<ITodo[]>("/todos")
		.then(async (effect) => {
			const initialTodoList = await Effect.runPromise(effect);
			return <View doneList={doneList} initialTodoList={initialTodoList} />;
		})
		.catch(() => notFound());
};

export default Page;
