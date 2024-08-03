import fetcher from "@/app/_libs/fetcher";
import View from "@/app/about/[id]/view";
import type { NextPage } from "next";
import { cookies } from "next/headers";

export interface ITodo {
	id: number;
	title: string;
	description: string;
	dueDate: string;
	priority: string;
	completed: boolean;
}

const Page: NextPage<{ params: { id: string } }> = async ({ params }) => {
	const cookieStore = cookies();
	const doneList = JSON.parse(cookieStore.get("doneList")?.value || "[]") as string[];
	const memo = cookieStore.get(params.id)?.value || "";
	const response = await fetcher.get<ITodo>(`/todos/${params.id}`);
	return <View todo={response} doneList={doneList} memo={memo} />;
};

export default Page;
