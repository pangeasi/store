import { createBreakpoint } from "react-use";

export const useBreakpoint = () => {
	const useBreakpoint = createBreakpoint({
		xl: 1280,
		l: 768,
		s: 350,
	});
	return {
		bp: useBreakpoint() as "xl" | "l" | "s",
		isMobile: useBreakpoint() === "s",
		isTablet: useBreakpoint() === "l",
		isDesktop: useBreakpoint() === "xl",
	};
};
