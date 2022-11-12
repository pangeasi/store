import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const SignOut = () => {
	const { push } = useRouter();
	const qc = useQueryClient();
	useEffect(() => {
		sessionStorage.removeItem("token");
		qc.removeQueries(["me"]);
		push("/");
	}, [push, qc]);
	return null;
};
