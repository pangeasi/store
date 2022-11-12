const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"@/components/(.*)": "<rootDir>/components/$1",
		"@/hooks/(.*)": "<rootDir>/hooks/$1",
		"@/services/(.*)": "<rootDir>/services/$1",
		"@/queries/(.*)": "<rootDir>/queries/$1",
		"@/(.*)": "<rootDir>/$1",
	},
};

module.exports = createJestConfig(customJestConfig);
