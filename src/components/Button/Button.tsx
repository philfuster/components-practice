import type { ButtonProps } from "./types/button";

function Button({
	borderRadius = 2,
	children,
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button style={{ borderRadius }} type={type} {...props}>
			{children}
		</button>
	);
}

export default Button;
