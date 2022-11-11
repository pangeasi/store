import Header from "@/components/UI/Header";
import Head from "next/head";

type LayoutProps = {
	children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Store online</title>
				<meta
					name="description"
					content="developed by daniballesteros.com"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="container m-auto max-w-lg px-4">{children}</main>
		</>
	);
};
