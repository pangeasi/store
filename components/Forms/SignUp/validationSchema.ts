import * as yup from "yup";

export const schema = yup.object({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required(),
	revalidatePassword: yup
		.string()
		.required()
		.oneOf([yup.ref("password")], "Passwords must match"),
});

export type SignUpDTO = yup.InferType<typeof schema>;
