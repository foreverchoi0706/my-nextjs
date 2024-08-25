import fetcher from "@/app/_libs/fetcher";
import type { ITodo } from "@/app/_types";
import View from "@/app/todos/[id]/view";
import { Effect } from "effect";
import type { NextPage } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const Page: NextPage<{ params: { id: string } }> = async ({ params }) => {
	const cookieStore = cookies();
	const doneList = JSON.parse(cookieStore.get("doneList")?.value || "[]") as string[];
	const memo = cookieStore.get(params.id)?.value || "";
	return fetcher
		.get<ITodo>(`/todos/${params.id}`)
		.then(async (effect) => {
			const response = await Effect.runPromise(effect);
			console.log(response);
			return <View todo={response} doneList={doneList} memo={memo} />;
		})
		.catch(() => notFound());
};

export default Page;
