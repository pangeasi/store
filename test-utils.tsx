import { render, renderHook } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { handlers } from "./mocks/handlers";
import { setupServer } from "msw/node";
import { ToastContainer } from "react-toastify";
export const createTestQueryClient = new QueryClient({
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
	const testQueryClient = createTestQueryClient;
	return render(
		<QueryClientProvider client={testQueryClient}>
			{ui}
			<ToastContainer />
		</QueryClientProvider>
	);
};
const wrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => (
	<QueryClientProvider client={createTestQueryClient}>
		{children}
	</QueryClientProvider>
);

const customRenderHook = (callback: Function) => {
	return renderHook(() => callback(), {
		wrapper,
	});
};

export const server = setupServer(...handlers);

export * from "@testing-library/react";
export { customRender as render, customRenderHook as renderHook };

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
