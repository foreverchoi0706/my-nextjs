interface JSON {
	parse<T = unknown>(text: string): T;
}

interface Body {
	json<T = unknown>(): Promise<T>;
}
