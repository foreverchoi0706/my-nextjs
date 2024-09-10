export interface ITodo {
	id: number;
	title: string;
	description: string;
	dueDate: string;
	priority: string;
	completed: boolean;
}

export interface ITodoMemoForm {
	memo: string;
}

export interface ILoginForm {
	id: string;
	password: string;
}
