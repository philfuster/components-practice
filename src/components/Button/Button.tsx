import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import type { Remap } from "../../shared/utilityTypes";
import "./styles.css";

type NativeButtonProps = Remap<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends NativeButtonProps {
	variant?: ButtonVariant;
}

function Button({
	type = "button",
	variant = "primary",
	className = "",
	...props
}: ButtonProps) {
	return (
		<button
			type="button"
			className={`${className}${getVariantClass(variant)}`}
			{...props}
		>
			Click me
		</button>
	);
}

function getVariantClass(variant: ButtonVariant): string {
	return `variant-${variant}`;
}

export default Button;
