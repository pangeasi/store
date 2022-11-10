import { forwardRef } from "react";
import { FieldError } from "../FieldError";

type InputProps = {
	label?: string;
	error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, ...rest }, ref) => {
		const labelCapitalized =
			label && label.charAt(0).toUpperCase() + label.slice(1);

		return (
			<label>
				<span className="font-bold">{labelCapitalized}</span>
				<input
					ref={ref}
					className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					{...rest}
				/>
				<FieldError message={error} />
			</label>
		);
	}
);

Input.displayName = "Input";
