const HamburgerMenu: React.FC<JSX.IntrinsicElements["svg"]> = ({
	...props
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 448 448"
		{...props}
	>
		<path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
	</svg>
);

export default HamburgerMenu;
