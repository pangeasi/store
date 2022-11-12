import { render, screen } from "@/test-utils";
import { FieldError } from ".";

describe("FieldError", () => {
	it("should be render a error message", () => {
		render(<FieldError message="error message" />);
		expect(screen.getByText("error message")).toBeInTheDocument();
	});

	it("should be not render a error message", () => {
		render(<FieldError message={undefined} />);
		expect(screen.queryByText("error message")).not.toBeInTheDocument();
	});
});
