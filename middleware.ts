import { ACCESS_TOKEN } from "@/app/_constants";
import { type NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: ["/login", "/logout", "/todos/:path*"],
};

const middleware = async (request: NextRequest) => {
	console.log("======middleware=====");
	const cookies = request.cookies;
	const { origin, pathname } = request.nextUrl;
	const hasAccessToken = cookies.has(ACCESS_TOKEN);

	if (pathname === "/login") {
		return hasAccessToken ? NextResponse.redirect(new URL("/", origin)) : NextResponse.next();
	}

	if (hasAccessToken && pathname === "/logout") {
		const nextResponse = NextResponse.redirect(new URL("/", origin));
		nextResponse.cookies.delete(ACCESS_TOKEN);
		return nextResponse;
	}
	if (!hasAccessToken) {
		return NextResponse.redirect(new URL(`/login?url=${pathname}`, origin));
	}
};

export default middleware;
