import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import type { FC, PropsWithChildren } from "react";
import React from "react";
import "./globals.css";
import Header from "@/app/_components/organisms/Header";
import { ACCESS_TOKEN } from "@/app/_constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TODO LIST",
	description: "TODO LIST",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	const cookieStore = cookies();
	return (
		<html lang="ko">
			<body style={inter.style} className="mx-auto my-0 max-w-[600px] p-2">
				<Header hasAccessToken={cookieStore.has(ACCESS_TOKEN)} />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
