import Link from "next/link";
import UserAvatar from "@/components/Icons/UserAvatar";
import { useMe } from "@/queries/auth/hooks";
import Image from "next/image";
import { Popover } from "@/components/Base/Popover";

export const Avatar = () => {
	const { data } = useMe();

	return (
		<Popover
			ariaLabel="avatar"
			render={() => (
				<div className="bg-white shadow-lg rounded-lg p-4">
					<Link href="/sign-out">Sign out</Link>
				</div>
			)}
		>
			{data?.avatar ? (
				<Image
					className="w-10 h-10 rounded-full object-cover"
					src={data.avatar}
					alt="user photo"
					width={640}
					height={480}
				/>
			) : (
				<UserAvatar className="text-4xl fill-blue-500" />
			)}
		</Popover>
	);
};
