import { api } from "../api";

type ResponseMe = {
	avatar: string;
	email: string;
	id: number;
	name: string;
	password?: string; // must be not returned
	role: string;
};

type ResponseLogin = {
	access_token: string;
};

export const auth = {
	me: async (token: string) =>
		(
			await api.get<ResponseMe>("/auth/profile", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		).data,
	login: async ({ email, password }: { email: string; password: string }) =>
		(await api.post<ResponseLogin>("/auth/login", { email, password }))
			.data,
};
