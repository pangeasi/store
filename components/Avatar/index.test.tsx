import { mockSessionStorage, render, screen, cleanup } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import { Avatar } from ".";

window.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}));
describe("Avatar", () => {
	it("should be render a avatar icon", () => {
		render(<Avatar />);

		expect(
			screen.getByRole("button", { name: "avatar" })
		).toBeInTheDocument();
	});

	it("should be display a menu when click button", async () => {
		render(<Avatar />);
		const avatar = screen.getByRole("button", { name: "avatar" });

		userEvent.click(avatar);

		expect(await screen.findByText(/sign out/i)).toBeInTheDocument();
	});

	it("should be display a menu when focus button", async () => {
		render(<Avatar />);

		userEvent.tab();

		expect(await screen.findByText(/sign out/i)).toBeInTheDocument();
	});

	it("should be focus item of menu content when is open and press tab", async () => {
		render(<Avatar />);

		await userEvent.tab();
		await userEvent.tab();

		expect(await screen.findByText(/sign out/i)).toHaveFocus();
	});

	it("should be close menu when escape is pressed", async () => {
		render(<Avatar />);

		await userEvent.tab();
		await userEvent.keyboard("{Escape}");

		expect(await screen.queryByText(/sign out/i)).not.toBeInTheDocument();
	});

	it("should be render a user's photo if user have a photo", async () => {
		const { setSessionStorage } = mockSessionStorage();
		setSessionStorage("token", "12345");
		render(<Avatar />);

		expect(
			await screen.findByRole("img", { name: "user photo" })
		).toBeInTheDocument();
		cleanup();
	});
});
