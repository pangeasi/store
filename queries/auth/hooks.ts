import { useMutation, useQuery } from "@tanstack/react-query";
import { useSessionStorage } from "react-use";
import { auth } from "../../services/auth";

export const useMe = () => {
	const [token] = useSessionStorage<string | undefined>("token");

	return useQuery(["me"], () => auth.me(token!), {
		enabled: !!token,
		refetchOnMount: false,
	});
};

export const useLogin = () => {
	const [, setToken] = useSessionStorage("token");
	return useMutation(auth.login, {
		onSuccess: (data) => {
			setToken(data.access_token);
		},
	});
};
