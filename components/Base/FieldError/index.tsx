type FieldErrorProps = {
	message: string | undefined;
};

export const FieldError: React.FC<FieldErrorProps> = ({ message }) => {
	return <span className="text-red-500 text-sm">{message}</span>;
};
