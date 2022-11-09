// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { setupServer } from "msw/node";
import { handlers } from "@/mocks/handlers";

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

const server = setupServer(...handlers);
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
