import { useQuery } from "@tanstack/react-query";
import { auth } from "../../services/auth";

export const useMe = () => {
	return useQuery(["me"], auth.me, {});
};
