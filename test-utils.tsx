import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { handlers } from "./mocks/handlers";
import { setupServer } from "msw/node";
import { ToastContainer } from "react-toastify";
const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
		logger: {
			log: console.log,
			warn: console.warn,
			error: () => {},
		},
	});

const customRender = (ui: React.ReactElement) => {
	const testQueryClient = createTestQueryClient();
	return render(
		<QueryClientProvider client={testQueryClient}>
			{ui}
			<ToastContainer />
		</QueryClientProvider>
	);
};
export const server = setupServer(...handlers);

export * from "@testing-library/react";
export { customRender as render };

export const mockSessionStorage = () => {
	const localStorageMock = (function () {
		let store: { [key: string]: any } = {};

		return {
			getItem(key: string) {
				return store[key];
			},

			setItem(key: string, value: string) {
				store[key] = value;
			},

			clear() {
				store = {};
			},

			removeItem(key: string) {
				delete store[key];
			},

			getAll() {
				return store;
			},
		};
	})();

	Object.defineProperty(window, "sessionStorage", {
		value: localStorageMock,
	});
	return {
		setSessionStorage: async (key: string, data: string) =>
			window.sessionStorage.setItem(key, data),

		getSessionStorage: async (key: string) =>
			window.sessionStorage.getItem(key),
	};
};
