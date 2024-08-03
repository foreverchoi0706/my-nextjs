import fetcher from "@/app/_libs/fetcher";
import type { ITodo } from "@/app/about/[id]/page";
import View from "@/app/view";
import type { NextPage } from "next";
import { cookies } from "next/headers";

const Page: NextPage = async () => {
	const cookieStore = cookies();
	const doneList = JSON.parse(cookieStore.get("doneList")?.value || "[]") as string[];
	const initialTodoList = await fetcher.get<ITodo[]>("/todos");
	return <View doneList={doneList} initialTodoList={initialTodoList} />;
};

export default Page;
