import dynamic from "next/dynamic";
import Link from "next/link";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useMe } from "@/queries/auth/hooks";
import { Logo } from "@/components/UI/Logo";
import { Avatar } from "@/components/Avatar";
import { Spinner } from "@/components/Base/Spinner";
import HamburgerMenu from "@/components/Icons/HamburgerMenu";
import { Popover } from "@/components/Base/Popover";

const Header = () => {
	const { data, isFetching, isLoading } = useMe();
	const { isMobile } = useBreakpoint();

	return (
		<header className="flex justify-between items-center mx-4">
			<Link href="/">
				<Logo />
			</Link>
			{!isMobile && (
				<nav>
					<ul className="flex gap-6 text-lg">
						<li className="transition ease-in hover:-translate-y-1 delay-150 hover:underline hover:decoration-1 hover:decoration-wavy duration-300">
							<Link href="/categories">Categories</Link>
						</li>
						<li className="transition ease-in hover:-translate-y-1 delay-150 hover:underline hover:decoration-1 hover:decoration-wavy duration-300">
							<Link href="/about">About</Link>
						</li>
					</ul>
				</nav>
			)}

			<div className="flex gap-4">
				{!isFetching && !data && (
					<>
						<Link
							className="border-blue-500 border-2 rounded-full px-2 border-dotted"
							href="/login"
						>
							Login
						</Link>
						<Link
							className="border-blue-500 border-2 rounded-full px-2 border-dotted"
							href="/sign-up"
						>
							Sign up
						</Link>
					</>
				)}

				{data && !isLoading && <Avatar />}
				{isFetching && isLoading && <Spinner />}
				{isMobile && (
					<Popover
						placement="bottom-start"
						ariaLabel="menu"
						render={() => (
							<div className="bg-white shadow-lg rounded-lg p-4">
								<ul className="flex flex-col gap-4">
									<li className="transition ease-in hover:-translate-y-1 delay-150 hover:underline hover:decoration-1 hover:decoration-wavy duration-300">
										<Link href="/categories">
											Categories
										</Link>
									</li>
									<li className="transition ease-in hover:-translate-y-1 delay-150 hover:underline hover:decoration-1 hover:decoration-wavy duration-300">
										<Link href="/about">About</Link>
									</li>
									{!data && (
										<>
											<li className="transition ease-in hover:-translate-y-1 delay-150 hover:underline hover:decoration-1 hover:decoration-wavy duration-300">
												<Link href="/login">Login</Link>
											</li>
											<li className="transition ease-in hover:-translate-y-1 delay-150 hover:underline hover:decoration-1 hover:decoration-wavy duration-300">
												<Link href="/sign-up">
													Sign up
												</Link>
											</li>
										</>
									)}
								</ul>
							</div>
						)}
					>
						<HamburgerMenu />
					</Popover>
				)}
			</div>
		</header>
	);
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
