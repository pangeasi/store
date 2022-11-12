import { FieldError as FError, FieldErrorsImpl, Merge } from "react-hook-form";

type FieldErrorProps = {
	message: string | FError | Merge<FError, FieldErrorsImpl<any>> | undefined;
};

export const FieldError: React.FC<FieldErrorProps> = ({ message }) => {
	return <span className="text-red-500 text-sm">{message?.toString()}</span>;
};
