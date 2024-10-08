import Fetcher from "@/app/_libs/Fetcher";
import type { ITodo } from "@/app/_types";
import View from "@/app/todos/[id]/view";
import { Effect } from "effect";
import type { NextPage } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const Page: NextPage<{ params: { id: string } }> = async ({ params }) => {
	const cookieStore = cookies();
	const doneList = JSON.parse<string[]>(cookieStore.get("doneList")?.value || "[]");
	const memo = cookieStore.get(params.id)?.value || "";
	return Fetcher.get<ITodo>(`/todos/${params.id}`)
		.then(async (effect) => {
			const response = await Effect.runPromise(effect);
			return <View todo={response} doneList={doneList} memo={memo} />;
		})
		.catch((e) => {
			console.log("ERROR", e);
			notFound();
		});
};

export default Page;
