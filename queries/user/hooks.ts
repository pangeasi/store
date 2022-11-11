import { user } from "@/services/user";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
	return useMutation(user.signUp);
};
