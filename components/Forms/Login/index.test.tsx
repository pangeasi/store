import { render, screen, server } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import { FormLogin } from ".";
import { rest } from "msw";

describe("LoginForm", () => {
	it("should be render a submit button disabled if fields is not filled", () => {
		render(<FormLogin />);
		expect(screen.getByRole("button", { name: /log in/i })).toBeDisabled();
	});
	it("should be render a submit button enabled if fields is filled", async () => {
		render(<FormLogin />);

		const inputEmail = screen.getByLabelText("Email");
		const inputPassword = screen.getByLabelText("Password");
		await userEvent.type(inputEmail, faker.internet.email());
		await userEvent.type(inputPassword, faker.internet.password());

		expect(screen.getByRole("button", { name: /log in/i })).toBeEnabled();
	});

	it("should be display a error message if email is invalid", async () => {
		render(<FormLogin />);

		const inputEmail = screen.getByLabelText("Email");
		const inputPassword = screen.getByLabelText("Password");
		await userEvent.type(inputEmail, "invalid");
		await userEvent.type(inputPassword, faker.internet.password());

		expect(
			screen.getByText("email must be a valid email")
		).toBeInTheDocument();
	});

	it("should be not display success message if form is not submitted", () => {
		render(<FormLogin />);

		expect(screen.queryByText(/login success/i)).not.toBeInTheDocument();
	});
	it("should be logged if response is ok", async () => {
		render(<FormLogin />);

		const inputEmail = screen.getByLabelText("Email");
		const inputPassword = screen.getByLabelText("Password");
		await userEvent.type(inputEmail, faker.internet.email());
		await userEvent.type(inputPassword, faker.internet.password());
		await userEvent.click(screen.getByRole("button", { name: /log in/i }));

		expect(await screen.findByText(/login success/i)).toBeInTheDocument();
	});

	it("should be display error message if response is not ok", async () => {
		server.use(
			rest.post("*", (_, res, ctx) => {
				return res(
					ctx.status(401),
					ctx.json({ message: "Unauthorized", statusCode: 401 })
				);
			})
		);
		render(<FormLogin />);

		const inputEmail = screen.getByLabelText("Email");
		const inputPassword = screen.getByLabelText("Password");
		await userEvent.type(inputEmail, faker.internet.email());
		await userEvent.type(inputPassword, faker.internet.password());
		await userEvent.click(screen.getByRole("button", { name: /log in/i }));

		expect(await screen.findByText(/unauthorized/i)).toBeInTheDocument();
	});
});
