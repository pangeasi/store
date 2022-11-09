import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/vercel.svg";

const Header = () => {
	const isMobile = global.innerWidth < 768;

	return (
		<div>
			<Image src={logo} alt="logo" />
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
		</div>
	);
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
