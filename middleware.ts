import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
	matcher: ["/"],
};

const middleware = (request: NextRequest) => {
	console.log(request);
	return NextResponse.next();
};

export default middleware;
