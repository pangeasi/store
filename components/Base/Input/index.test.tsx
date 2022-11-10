import { render, screen } from "@/test-utils";
import { Input } from ".";

describe("Input", () => {
	it("should be render a input", () => {
		render(<Input label="Email" />);
		expect(screen.getByLabelText("Email")).toBeInTheDocument();
	});

	it("should be display label with first letter capitalized", () => {
		render(<Input label="email" />);
		expect(screen.getByLabelText("Email")).toBeInTheDocument();
	});

	it("should be display a error message if input is invalid", () => {
		render(<Input label="Email" error="Email is required" />);
		expect(screen.getByText("Email is required")).toBeInTheDocument();
	});

	it("should be display like password if type password is passed", () => {
		render(<Input label="Password" type="password" />);

		expect(screen.getByLabelText("Password")).toHaveAttribute(
			"type",
			"password"
		);
	});
});
