import type { ComponentProps } from "react";
import type { Remap } from "../../../shared/utilityTypes";

type NativeButtonProps = Remap<ComponentProps<"button">>;

export interface ButtonProps extends NativeButtonProps {
	borderRadius?: number | undefined;
}
