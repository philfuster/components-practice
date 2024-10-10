import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { Remap } from "../../shared/utilityTypes";
import "./styles.css";

// #region local type definitions
export interface ContainerProps extends NativeContainerProps {
	children: React.ReactNode;
	className?: string;
}
type NativeContainerProps = Remap<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;
// #endregion

function Container({ children, className = "", ...props }: ContainerProps) {
	return (
		<div className={`container ${className}`} {...props}>
			{children}
		</div>
	);
}

export default Container;
