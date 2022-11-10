import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "@/queries/auth/hooks";
import { Input } from "@/components/Base/Input";
import { toast } from "react-toastify";
import { LoginDTO, schema } from "./validationSchema";
import { useRouter } from "next/router";

export const FormLogin = () => {
	const { mutateAsync } = useLogin();
	const { push } = useRouter();
	const methods = useForm<LoginDTO>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = methods;

	const onSubmit = handleSubmit(async (data) => {
		await mutateAsync(data)
			.then(() => {
				toast.success("Login successful");
				push("/");
			})
			.catch(() => {
				toast.error("Unauthorized");
			});
	});

	return (
		<FormProvider {...methods}>
			<form onSubmit={onSubmit} className="flex flex-col gap-4">
				<Input
					label="email"
					error={errors.email && errors.email.message}
					{...register("email")}
				/>
				<Input
					label="password"
					type="password"
					error={errors.password && errors.password.message}
					{...register("password")}
				/>
				<button
					type="submit"
					disabled={!isValid}
					className="bg-blue-500 text-white rounded-md p-2"
				>
					submit {isValid}
				</button>
			</form>
		</FormProvider>
	);
};
