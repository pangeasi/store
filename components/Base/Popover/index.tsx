import { useState } from "react";
import {
	Placement,
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

interface PopOverProps {
	render: (data: {
		close: () => void;
		labelId: string;
		descriptionId: string;
	}) => React.ReactNode;
	placement?: Placement;
	ariaLabel?: string;
	children: JSX.Element;
}

export const Popover: React.FC<PopOverProps> = ({
	children,
	render,
	placement,
	ariaLabel,
}) => {
	const [open, setOpen] = useState(false);

	const { x, y, reference, floating, strategy, context } = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset(5), flip(), shift()],
		placement,
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
				aria-label={ariaLabel || "popover"}
				ref={reference}
				{...getReferenceProps()}
			>
				{children}
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
						style={{
							position: strategy,
							top: y ?? 0,
							left: x ?? 0,
						}}
						aria-labelledby={labelId}
						aria-describedby={descriptionId}
						{...getFloatingProps()}
					>
						{render({
							labelId,
							descriptionId,
							close: () => {
								setOpen(false);
							},
						})}
					</div>
				</FloatingFocusManager>
			)}
		</>
	);
};
