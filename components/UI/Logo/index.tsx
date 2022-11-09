type LogoProps = {} & React.HTMLAttributes<SVGSVGElement>;

export const Logo: React.FC<LogoProps> = (props) => (
	<svg
		role="img"
		aria-label="logo"
		xmlns="http://www.w3.org/2000/svg"
		width={100}
		height={100}
		viewBox="0 0 192 192"
		{...props}
	>
		<g fillRule="evenodd" clipRule="evenodd">
			<path d="M0 0h192.756v192.756H0V0z" />
			<path
				d="m50.789 73.072 3.534-1.107a23.934 23.934 0 0 1 7.204-1.109c3.895 0 7.113.879 9.651 2.634 2.538 1.754 3.807 3.97 3.807 6.649 0 2.402-1.034 4.34-3.099 5.817-2.068 1.478-4.78 2.216-8.14 2.216a26.037 26.037 0 0 1-2.795-.139c-1.089-.138-2.27-.449-3.541-.933-1.271-.484-3.088-1.234-5.45-2.249-.046.23-.08.426-.102.589-.023.162-.034.31-.034.449 0 .646.238 1.304.715 1.973.478.668 1.191 1.371 2.145 2.109.09.046.147.081.169.105.022.022.035.056.035.102.046.047.353.231.921.554.566.323 2.347 1.406 5.345 3.252 2.587 1.616 4.483 3.357 5.686 5.226 1.202 1.869 1.804 4.002 1.804 6.401 0 5.444-2.265 9.828-6.797 13.15-4.532 3.32-10.537 4.982-18.012 4.982-6.344 0-11.453-1.373-15.328-4.116-3.875-2.744-5.812-6.376-5.812-10.896 0-3.645 1.438-6.746 4.317-9.307 2.877-2.561 6.376-3.84 10.501-3.84h.748c2.31.137 4.451.703 6.422 1.695 1.971.992 3.025 2.088 3.161 3.286v.208c0 .186-.012.346-.035.485a.617.617 0 0 1-.169.345c-.091.185-.283.37-.579.555-.295.185-.736.438-1.325.76a2.635 2.635 0 0 0-1.087 1.039c-.272.46-.408.968-.408 1.521 0 1.015.453 1.902 1.359 2.664.905.762 1.993 1.142 3.263 1.142 1.495 0 2.741-.415 3.738-1.244.998-.83 1.497-1.894 1.497-3.186a5.66 5.66 0 0 0-.103-1.074 3.377 3.377 0 0 0-.375-1.003c-.364-.69-.953-1.405-1.771-2.145-.818-.738-1.977-1.638-3.475-2.7-1.273-.877-2.363-1.72-3.27-2.527a20.573 20.573 0 0 1-2.317-2.387c-.773-.969-1.33-1.938-1.67-2.907a9.11 9.11 0 0 1-.511-3.046c0-.369.01-.715.034-1.037.022-.323.056-.624.102-.899.136-.645.34-1.313.612-2.004.271-.691.656-1.521 1.155-2.49-1.134-.459-2.049-.783-2.745-.967a7.754 7.754 0 0 0-1.988-.277c-1.034 0-1.933.333-2.696 1.002s-1.146 1.463-1.146 2.384c0 .969.306 1.752.918 2.352.613.599 1.438.945 2.482 1.036.633.047 1.064.173 1.291.381.226.208.362.52.408.935.044 1.061-.851 1.995-2.686 2.802-1.835.807-3.954 1.209-6.354 1.209-3.944 0-7.104-1.001-9.483-3.008-2.379-2.007-3.569-4.669-3.569-7.99 0-3.226 1.269-5.948 3.807-8.162 2.536-2.213 5.618-3.32 9.243-3.32h.68c.226 0 .453.023.679.068 1.313.091 2.741.389 4.282.889 1.541.501 3.578 1.304 6.116 2.408.861.37 1.586.694 2.175.97a66.722 66.722 0 0 1 1.834.9c.091.046.205.092.341.137.226.139.463.277.712.416.249.138.532.3.85.483 2.087-1.473 3.129-2.211 3.129-2.211zm9.615 8.248c1.021.325 1.825.486 2.415.486.544 0 1.009-.15 1.393-.452.385-.3.578-.683.578-1.147 0-.556-.339-1.032-1.02-1.425-.679-.394-1.541-.591-2.583-.591a8.22 8.22 0 0 0-1.122.07c-.341.047-.692.14-1.054.278-.364.138-.748.312-1.156.521a7.335 7.335 0 0 0-1.291.87c1.541.602 2.821 1.067 3.84 1.39zm30.803 8.187c.68 0 1.189.15 1.529.45.339.3.51.75.51 1.349 0 1.65-.272 2.875-.814 3.677-.544.802-1.384 1.202-2.516 1.202H86.38l-.103.312a.798.798 0 0 0-.033.241c-.047.185-.114.46-.204.829-.092.367-.272 1.219-.543 2.553-.046.277-.137.703-.273 1.276-.135.575-.295 1.255-.476 2.036-.136.507-.238 1-.306 1.483a9.713 9.713 0 0 0-.102 1.347c0 .875.261 1.564.783 2.07.521.508 1.279.759 2.276.759.363 0 .759-.057 1.19-.173.431-.113.94-.287 1.53-.519.316-.139.611-.242.883-.311s.498-.104.68-.104c.317 0 .577.104.781.312.204.207.307.494.307.863 0 .508-.215 1.073-.646 1.696-.431.621-1.077 1.278-1.937 1.972a4.598 4.598 0 0 0-.408.311 2.41 2.41 0 0 1-.475.312 13.295 13.295 0 0 1-3.195 1.695c-1.18.438-2.357.726-3.534.864a15.66 15.66 0 0 1-.918.104 12.92 12.92 0 0 1-.917.034c-2.312 0-4.237-.645-5.777-1.935-1.542-1.289-2.312-2.925-2.312-4.905v-1.104c.09-.646.261-1.428.509-2.35.249-.919.759-2.555 1.53-4.903.18-.599.329-1.104.441-1.521.113-.414.238-.828.374-1.243.044-.184.09-.367.136-.553.044-.184.09-.392.136-.621a2.655 2.655 0 0 1 .136-.83c-.816-.09-1.418-.32-1.801-.688-.384-.368-.577-.919-.577-1.656 0-.136.01-.263.034-.378.023-.114.034-.242.034-.379.181-.597.668-1.298 1.46-2.102.792-.805 2.233-2.103 4.318-3.896 2.175-1.89 3.964-3.274 5.368-4.151 1.404-.875 2.471-1.314 3.195-1.314.498 0 .907.151 1.225.451.317.299.453.681.407 1.139 0 .231-.035.486-.103.762a8.85 8.85 0 0 1-.304.968c-.047.14-.104.301-.171.485a5.095 5.095 0 0 0-.17.554c-.045.137-.091.288-.136.45-.045.163-.09.311-.136.449-.136.508-.26 1.003-.374 1.487-.112.485-.192.865-.237 1.142h3.262v.002z"
				fill="#cc2a29"
				stroke="#fff"
				strokeWidth={1.501}
				strokeMiterlimit={2.613}
			/>
			<path
				d="M117.055 92.129c2.016 2.053 3.025 4.741 3.025 8.062 0 4.52-1.566 8.349-4.691 11.485s-6.955 4.705-11.486 4.705c-3.264 0-5.947-1.039-8.055-3.114-2.107-2.075-3.16-4.728-3.16-7.957 0-4.52 1.585-8.359 4.757-11.519 3.172-3.161 7.023-4.741 11.557-4.741 3.352.001 6.035 1.027 8.053 3.079zm-9.108 1.765a.235.235 0 0 1-.172-.068c-.678.369-1.426 1.544-2.242 3.529-.814 1.984-1.428 4.221-1.836 6.711v.276a.528.528 0 0 1-.066.208c-.227 1.661-.238 3.034-.035 4.118.205 1.083.555 1.672 1.055 1.764.77.093 1.584-.934 2.447-3.08.861-2.145 1.496-4.671 1.904-7.576.225-1.659.258-3.009.1-4.047-.158-1.038-.486-1.649-.984-1.834l-.171-.001zm12.354 21.582 3.875-18.059a4.671 4.671 0 0 0 .135-1.108c.045-.138.068-.298.068-.484v-.553c0-.461-.057-.831-.17-1.106-.113-.278-.328-.531-.646-.763-.09-.09-.18-.171-.271-.242-.09-.068-.203-.148-.338-.242a16.463 16.463 0 0 1 2.311-1.694c.859-.53 1.744-.98 2.65-1.35a16.328 16.328 0 0 1 2.141-.658 8.67 8.67 0 0 1 1.938-.242c1.178 0 2.115.288 2.82.865.701.576 1.053 1.373 1.053 2.387v.276c0 .187-.023.428-.068.728a86.95 86.95 0 0 0-.203 1.487c.998-.968 1.711-1.648 2.141-2.04.432-.392.805-.727 1.123-1.004.045 0 .09-.021.137-.069a2.57 2.57 0 0 1 .27-.241c.092-.07.205-.15.34-.243.455-.323.953-.622 1.496-.9a8.087 8.087 0 0 1 1.631-.625c.453-.137.885-.24 1.293-.309.408-.07.793-.105 1.154-.105 1.541 0 2.775.462 3.705 1.385.928.922 1.393 2.123 1.393 3.598 0 2.122-.713 3.977-2.141 5.57-1.428 1.592-3.07 2.386-4.928 2.386a4.263 4.263 0 0 1-2.785-1.002c-.818-.668-1.225-1.44-1.225-2.317 0-.139.01-.289.033-.451.023-.161.057-.357.102-.588-1.721 1.016-3.08 2.308-4.076 3.875-1 1.569-1.791 3.645-2.381 6.228l-.611 2.837-.951 4.98H120.17l.131-.207zm39.945-9.276c0 .882.328 1.589.984 2.122.658.532 1.484.798 2.482.798.545 0 1.178-.08 1.904-.241a11.408 11.408 0 0 0 2.174-.728 11.83 11.83 0 0 0 1.63-.693c.09-.045.158-.078.205-.103a.545.545 0 0 0 .135-.104c.09-.045.281-.15.576-.312.295-.163 1.055-.636 2.281-1.42a5.2 5.2 0 0 1 1.086-.414.586.586 0 0 1 .271-.071h.271c.453 0 .826.14 1.121.416s.443.669.443 1.176c0 .74-.318 1.546-.953 2.424-.633.877-1.541 1.797-2.719 2.767-1.994 1.569-4.021 2.757-6.082 3.563-2.062.806-4.137 1.211-6.221 1.211-3.443 0-6.264-1.042-8.461-3.125-2.197-2.082-3.297-4.812-3.297-8.191 0-4.396 1.801-8.238 5.404-11.523 3.6-3.286 7.803-4.929 12.607-4.929 2.582 0 4.699.672 6.354 2.016 1.654 1.345 2.482 3.082 2.482 5.213 0 2.643-1.373 4.878-4.113 6.708-2.74 1.831-6.264 2.861-10.568 3.092v.348h.004zm4.791-7.767c.883-.507 1.326-1.153 1.326-1.938 0-.462-.137-.841-.408-1.142a1.317 1.317 0 0 0-1.02-.451c-.861 0-1.654.417-2.381 1.246-.725.83-1.27 1.984-1.631 3.461 1.86-.276 3.229-.667 4.114-1.176z"
				fill="#cc2a29"
				stroke="#fff"
				strokeWidth={1.501}
				strokeMiterlimit={2.613}
			/>
		</g>
	</svg>
);
