import type { ItemBase, ListProps } from "./types/list";

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
