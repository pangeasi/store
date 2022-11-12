import { Input } from "@/components/Base/Input";
import { useRegister } from "@/queries/user/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { schema, SignUpDTO } from "./validationSchema";

export const SignUp = () => {
	const { mutateAsync } = useRegister();
	const { push } = useRouter();
	const methods = useForm<SignUpDTO>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});
	const {
		handleSubmit,
		register,
		formState: { isValid, errors },
	} = methods;

	const onSubmit = handleSubmit(async (data) => {
		await mutateAsync(data)
			.then(() => {
				toast.success("Account is created");
				push("/login");
			})
			.catch(() => {
				toast.error("Something went wrong");
			});
	});
	return (
		<FormProvider {...methods}>
			<form onSubmit={onSubmit} className="flex flex-col gap-4">
				<Input
					label="Name"
					error={errors.name && errors.name.message}
					{...register("name")}
				/>
				<Input
					label="Email"
					error={errors.email && errors.email.message}
					{...register("email")}
				/>
				<Input
					label="password"
					type="password"
					error={errors.password && errors.password.message}
					{...register("password")}
				/>
				<Input
					label="confirm password"
					type="password"
					error={
						errors.revalidatePassword &&
						errors.revalidatePassword.message
					}
					{...register("revalidatePassword")}
				/>

				<button
					type="submit"
					disabled={!isValid}
					className="bg-blue-500 text-white rounded-md p-2"
				>
					Sign In
				</button>
			</form>
		</FormProvider>
	);
};
