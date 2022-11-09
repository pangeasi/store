import { render, screen } from "@/test-utils";
import Header from ".";

describe("Header", () => {
	it("Should render logo correctly", () => {
		render(<Header />);

		expect(screen.getByRole("img", { name: "logo" })).toBeInTheDocument();
	});

	it("Should render a menu on desktop viewport", () => {
		render(<Header />);

		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});

	it("Should render a hamburger menu on mobile viewport", () => {
		global.innerWidth = 320;
		render(<Header />);

		expect(
			screen.getByRole("button", { name: "menu" })
		).toBeInTheDocument();
	});

	it("Should hide menu on mobile viewport", () => {
		global.innerWidth = 478;
		render(<Header />);

		expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
	});

	it("Should hide hamburger menu on desktop viewport", () => {
		global.innerWidth = 1024;
		render(<Header />);

		expect(
			screen.queryByRole("button", { name: "menu" })
		).not.toBeInTheDocument();
	});

	it("Should render categories and about links on desktop viewport", () => {
		render(<Header />);

		expect(
			screen.getByRole("link", { name: /categories/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /about/i })
		).toBeInTheDocument();
	});

	it("Should render a button to login if user isn't logged", () => {
		render(<Header />);

		expect(
			screen.getByRole("button", { name: /login/i })
		).toBeInTheDocument();
	});

	it("Should render an avatar dropdown if user is logged", async () => {
		render(<Header />);
		expect(await screen.findByText(/john doe/i)).toBeInTheDocument();
		expect(
			await screen.findByRole("menu", { name: /user/i })
		).toBeInTheDocument();
	});

	it("Should hide avatar dropdown if user isn't logged", () => {
		render(<Header />);

		expect(
			screen.queryByRole("menu", { name: /user/i })
		).not.toBeInTheDocument();
	});
});
