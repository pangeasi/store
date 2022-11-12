import { SignUpDTO } from "@/components/Forms/SignUp/validationSchema";
import { api } from "../api";

type ResponseSignUp = {
	avatar: string;
	email: string;
	name: string;
	password?: string; // must be not returned
	role: string;
};

export const user = {
	signUp: async (body: Omit<SignUpDTO, "revalidatePassword">) =>
		(
			await api.post<ResponseSignUp>("/users", {
				...body,
				role: "customer",
				avatar: "https://i.pravatar.cc/150?img=1",
			})
		).data,
};
