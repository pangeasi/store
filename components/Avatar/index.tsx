import {
	offset,
	flip,
	shift,
	autoUpdate,
	useFloating,
	useInteractions,
	useRole,
	useDismiss,
	useId,
	useClick,
	FloatingFocusManager,
	useFocus,
} from "@floating-ui/react-dom-interactions";
import { useState } from "react";
import Link from "next/link";
import UserAvatar from "@/components/Icons/UserAvatar";
import { useMe } from "@/queries/auth/hooks";
import Image from "next/image";

export const Avatar = () => {
	const [open, setOpen] = useState(false);
	const { data } = useMe();

	const { x, y, reference, floating, strategy, context } = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset(5), flip(), shift()],
		placement: "bottom",
		whileElementsMounted: autoUpdate,
	});

	const id = useId();
	const labelId = `${id}-label`;
	const descriptionId = `${id}-description`;

	const { getReferenceProps, getFloatingProps } = useInteractions([
		useFocus(context),
		useClick(context),
		useRole(context),
		useDismiss(context),
	]);

	return (
		<>
			<button
				aria-label="avatar"
				ref={reference}
				{...getReferenceProps()}
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
			</button>
			{open && (
				<FloatingFocusManager
					context={context}
					modal={false}
					order={["reference", "content"]}
					returnFocus={false}
				>
					<div
						ref={floating}
						className="bg-white shadow-lg rounded-lg p-4"
						style={{
							position: strategy,
							top: y ?? 0,
							left: x ?? 0,
						}}
						aria-labelledby={labelId}
						aria-describedby={descriptionId}
						{...getFloatingProps()}
					>
						<Link href="/logout">Sign out</Link>
					</div>
				</FloatingFocusManager>
			)}
		</>
	);
};
