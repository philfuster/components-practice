import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import type { Remap } from "../../../shared/utilityTypes";

export interface ItemBase {
	id: string;
	content: string;
}

type NativeContainerProps = Remap<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface ListContainerProps extends Omit<NativeContainerProps, "children"> {}

export interface ListItemInjectedProps<TItem extends ItemBase> {
	item: TItem;
	index: number;
	ListItem: (props: ItemBase) => ReactNode;
}

export interface ListProps<TItem extends ItemBase> extends ListContainerProps {
	items: TItem[];
	children: (props: ListItemInjectedProps<TItem>) => ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
}
