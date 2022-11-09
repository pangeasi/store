import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLogin } from "@/queries/auth/hooks";

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
});
type LoginDTO = yup.InferType<typeof schema>;
export const FormLogin = () => {
	const { mutate, data, isError } = useLogin();
	const methods = useForm<LoginDTO>({
		resolver: yupResolver(schema),
	});
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = methods;

	const onSubmit = handleSubmit(async (data) => {
		await mutate(data);
	});

	return (
		<FormProvider {...methods}>
			<form onSubmit={onSubmit}>
				<label>
					<input type="text" {...register("email")} />
					Email
				</label>
				<label>
					<input type="password" {...register("password")} />
					Password
				</label>
				<button type="submit" disabled={!isValid}>
					submit {isValid}
				</button>
			</form>
			{data && <div>Login success</div>}
			{isError && <div>Unauthorized</div>}
		</FormProvider>
	);
};
