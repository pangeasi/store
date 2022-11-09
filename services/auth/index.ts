import { api } from "../api";

export const auth = {
	me: async () => (await api.get("/auth/profile")).data,
};
