// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { server } from "@/test-utils";

jest.mock("next/dynamic", () => ({
	__esModule: true,
	default: (...props) => {
		const dynamicModule = jest.requireActual("next/dynamic");
		const dynamicActualComp = dynamicModule.default;
		const RequiredComponent = dynamicActualComp(props[0]);
		RequiredComponent.preload
			? RequiredComponent.preload()
			: RequiredComponent.render.preload();
		return RequiredComponent;
	},
}));
jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: "",
			asPath: "",
			push: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		};
	},
}));

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
