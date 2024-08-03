class Fetcher {
	constructor(private readonly baseUrl: string) {}

	get<T>(path: string, options?: RequestInit) {
		return fetch(`${this.baseUrl}${path}`, {
			headers: {
				"Content-Type": "application/json",
				...options?.headers,
			},
			...options,
		}).then((response) => response.json() as T);
	}
}

export default new Fetcher("https://freetestapi.com/api/v1");
