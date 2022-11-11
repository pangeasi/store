import { useMe } from "@/queries/auth/hooks";
import {
	mockSessionStorage,
	screen,
	render,
	cleanup,
	createTestQueryClient as qc,
} from "@/test-utils";
import { SignOut } from ".";
import { Avatar } from "../Avatar";

describe("SignOut", () => {
	it("should be sign out user when is mounted", () => {
		const { setSessionStorage } = mockSessionStorage();
		setSessionStorage("token", "12345");
		render(<SignOut />);

		expect(sessionStorage.getItem("token")).toBeUndefined();
		cleanup();
	});

	it("should be redirect to home page when session is removed after mounted", () => {
		const { setSessionStorage } = mockSessionStorage();
		setSessionStorage("token", "12345");
		render(<SignOut />);

		expect(window.location.pathname).toBe("/");
		cleanup();
	});

	it("should be remove me query from cache when session is removed after mounted", async () => {
		const { setSessionStorage } = mockSessionStorage();
		setSessionStorage("token", "12345");

		render(<Avatar />);

		expect(
			await screen.findByRole("img", { name: /user photo/i })
		).toBeInTheDocument(); // wait for me query to be cached

		render(<SignOut />);

		expect(qc.getQueryData(["me"])).toBeUndefined();
		cleanup();
	});
});
