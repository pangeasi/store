import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { handlers } from "./mocks/handlers";
import { setupServer } from "msw/node";
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
	const { rerender, ...result } = render(
		<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
	);
	return {
		...result,
		rerender: (rerenderUi: React.ReactElement) =>
			rerender(
				<QueryClientProvider client={testQueryClient}>
					{rerenderUi}
				</QueryClientProvider>
			),
	};
};
export const server = setupServer(...handlers);

export * from "@testing-library/react";
export { customRender as render };
