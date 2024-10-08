import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import type { Remap } from "../../shared/utilityTypes";

// #region local type definitions
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
// #endregion
const ListItem = (props: ItemBase) => (
	<li className="list-item">{props.content}</li>
);

const List = <TItem extends ItemBase>({
	items,
	header,
	footer,
	children,
	className,
	...props
}: ListProps<TItem>) => {
	return (
		<div
			className={`list-container${className ? ` ${className}` : ""}`}
			{...props}
		>
			{header}
			<ul className="list">
				{items.map((item, index) => children({ item, index, ListItem }))}
			</ul>
			{footer}
		</div>
	);
};

export default List;
