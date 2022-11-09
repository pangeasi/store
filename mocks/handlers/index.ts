import { rest } from "msw";
export const handlers = [
	rest.get(`*/auth/profile`, (req, res, ctx) => {
		return res(
			ctx.json({
				id: 1,
				name: "John Doe",
				email: "john.doe@gmail.com",
			})
		);
	}),
	rest.post(`*/auth/login`, (req, res, ctx) => {
		return res(
			ctx.status(201),
			ctx.json({
				token: "123456",
			})
		);
	}),
];
