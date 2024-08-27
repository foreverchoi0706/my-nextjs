import Fetcher from "@/app/_libs/Fetcher";
import type { ITodo } from "@/app/_types";
import { Effect } from "effect";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params }: { params: { id: string } }) => {
	return Fetcher.get<ITodo[]>(`https://freetestapi.com/api/v1/todos/${params.id}`)
		.then((effect) => Effect.runPromise(effect).then(NextResponse.json))
		.catch(NextResponse.json);
};
