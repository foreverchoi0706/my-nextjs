import { Effect } from "effect";

class Fetcher {
	constructor(private readonly baseUrl: string) {}

	public async get<T>(path: string, options?: RequestInit) {
		const input = path.includes("https://") ? path : this.baseUrl + path;
		return Effect.tryPromise<T, Error>({
			try: async () => {
				const response = await fetch(input, {
					headers: {
						"Content-Type": "application/json",
						...options?.headers,
					},
					credentials: "include",
					...options,
				});
				return response.json<T>();
			},
			catch: (e) => {
				return {
					name: "fetch error",
					message: JSON.stringify(e),
				};
			},
		});
	}
}

export default new Fetcher("http://localhost:3000/api");
