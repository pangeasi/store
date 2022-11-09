import dynamic from "next/dynamic";
import Link from "next/link";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useMe } from "@/queries/auth/hooks";
import { Logo } from "@/components/UI/Logo";
import { useRouter } from "next/router";

const Header = () => {
	const { push } = useRouter();
	const { data } = useMe();
	const { isMobile } = useBreakpoint();

	return (
		<div>
			<div>{data?.name}</div>
			<Logo />
			{!isMobile && (
				<nav>
					<ul>
						<li>
							<Link href="/categories">Categories</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
					</ul>
				</nav>
			)}
			{isMobile && <button aria-label="menu">|||</button>}
			<button aria-label="login" onClick={() => push("/login")}>
				Login
			</button>
			{data && <div role="menu" aria-label="user"></div>}
		</div>
	);
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
