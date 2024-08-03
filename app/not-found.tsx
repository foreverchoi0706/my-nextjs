import { redirect } from "next/navigation";
import type { FC } from "react";

const NotFound: FC = () => {
	return redirect("/");
};

export default NotFound;
