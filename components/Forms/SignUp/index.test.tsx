import { cleanup, render, screen, server, waitFor } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import { SignUp } from ".";
import { rest } from "msw";

const fillForm = async () => {
	const name = screen.getByLabelText(/name/i);
	const emailInput = screen.getByLabelText(/email/i);
	const passwordInput = screen.getByLabelText(/^password/i);
	const revalidatePassword = screen.getByLabelText(/confirm password/i);
	const password = faker.internet.password();
	await userEvent.type(name, faker.name.firstName());
	await userEvent.type(emailInput, faker.internet.email());
	await userEvent.type(passwordInput, password);
	await userEvent.type(revalidatePassword, password);
};

describe("SignUp", () => {
	it("should be display submit button disabled when fields is empty", () => {
		render(<SignUp />);

		expect(screen.getByRole("button", { name: /sign in/i })).toBeDisabled();
		cleanup();
	});

	it("should be display submit button enabled when fields is filled", async () => {
		render(<SignUp />);

		await fillForm();

		await waitFor(() => {
			expect(
				screen.getByRole("button", { name: /sign in/i })
			).toBeEnabled();
		});
	});

	it("should be display error message if email is invalid", async () => {
		render(<SignUp />);

		const emailInput = screen.getByLabelText(/email/i);
		await userEvent.type(emailInput, "invalid");
		await userEvent.tab();
		expect(
			await screen.findByText(/email must be a valid email/i)
		).toBeInTheDocument();
	});

	it("should be display error message if passwords don't match", async () => {
		render(<SignUp />);

		const passwordInput = screen.getByLabelText(/^password/i);
		const revalidatePassword = screen.getByLabelText(/confirm password/i);
		await userEvent.type(passwordInput, "123");
		await userEvent.type(revalidatePassword, "321");
		await userEvent.tab();

		expect(
			await screen.findByText(/passwords must match/i)
		).toBeInTheDocument();
	});

	it("should be display a success message if user is registered", async () => {
		render(<SignUp />);

		await fillForm();
		await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

		expect(
			await screen.findByText(/account is created/i)
		).toBeInTheDocument();
	});

	it("should be display a error message if user is not registered", async () => {
		server.use(
			rest.post("*", (req, res, ctx) => {
				return res(
					ctx.status(500),
					ctx.json({ message: "Internal server error" })
				);
			})
		);
		render(<SignUp />);

		await fillForm();
		await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

		expect(
			await screen.findByText(/something went wrong/i)
		).toBeInTheDocument();
	});
});
