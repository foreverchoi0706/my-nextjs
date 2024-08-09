"use client";
import Link from "next/link";
import type { FC } from "react";

const ErrorPage: FC = () => {
	return (
		<main>
			Root ErrorPage
			<Link href="/">HOME</Link>
		</main>
	);
};

export default ErrorPage;
