"use client";
import { deleteCookie } from "@/app/_actions";
import Typography from "@/app/_components/atoms/Typography";
import { ACCESS_TOKEN } from "@/app/_constants";
import Link from "next/link";
import React, { type FC } from "react";

interface IProps {
	hasAccessToken: boolean;
}

const Header: FC<IProps> = ({ hasAccessToken }) => {
	return (
		<header className="flex items-center justify-between py-2">
			<Link href="/">
				<Typography as="h2">TODO LIST</Typography>
			</Link>
			{hasAccessToken ? (
				<button
					onClick={() => {
						deleteCookie(ACCESS_TOKEN).then(() => {
							window.location.reload();
						});
					}}
				>
					LOGOUT
				</button>
			) : (
				<Link href="/login">LOGIN</Link>
			)}
		</header>
	);
};

export default Header;
