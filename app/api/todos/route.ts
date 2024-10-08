import Fetcher from "@/app/_libs/Fetcher";
import type { ITodo } from "@/app/_types";
import { Effect } from "effect";
import { NextResponse } from "next/server";

export const GET = async () => {
	return Fetcher.get<ITodo[]>("https://freetestapi.com/api/v1/todos")
		.then((effect) => Effect.runPromise(effect).then(NextResponse.json))
		.catch(NextResponse.json);
};
