import { api } from "../api";

export const auth = {
	me: async () => (await api.get("/auth/profile")).data,
	login: async ({ email, password }: { email: string; password: string }) =>
		(await api.post("/auth/login", { email, password })).data,
};
