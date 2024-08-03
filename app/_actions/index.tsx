"use server";
import { cookies } from "next/headers";

export const getCookie = async (key: string) => {
	const cookieStore = cookies();
	return cookieStore.get(key)?.value;
};

export const setCookie = async (key: string, value: unknown) => {
	const cookieStore = cookies();
	cookieStore.set(key, JSON.stringify(value));
};
