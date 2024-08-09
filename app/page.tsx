import fetcher from "@/app/_libs/fetcher";
import View from "@/app/view";
import type { NextPage } from "next";
import { cookies } from "next/headers";
import { ITodo } from "@/app/_types";

const Page: NextPage = async () => {
	const cookieStore = cookies();
	const doneList = JSON.parse<string[]>(cookieStore.get("doneList")?.value || "[]");
	const initialTodoList = await fetcher.get<ITodo[]>("/todos");
	return <View doneList={doneList} initialTodoList={initialTodoList} />;
};

export default Page;
