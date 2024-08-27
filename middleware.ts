import { NextResponse } from "next/server";

export const config = {
	matcher: ["/"],
};

const middleware = () => {
	return NextResponse.next();
};

export default middleware;
