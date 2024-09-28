import type { Comment } from "./types/comments";
import List from "../List/List";

const comments: Comment[] = [
	{
		id: "1",
		content: "This is a comment",
		date: "2021-10-10",
	},
	{
		id: "2",
		content: "This is another comment",
		date: "2021-10-11",
	},
];

const Comments = () => {
	return (
		<List<Comment> items={comments}>
			{({ item, ListItem }) => <ListItem {...item} key={item.id} />}
		</List>
	);
};

const CommentsWithOwnListItem = () => {
	return (
		<List<Comment> items={comments}>
			{({ item }) => (
				<li key={item.id}>{`${item.content} - custom list item`}</li>
			)}
		</List>
	);
};

const CommentsWithHeaderAndFooter = () => {
	return (
		<List<Comment>
			items={comments}
			header={<h1>My Comments Header</h1>}
			footer={<span>My Comments Footer</span>}
		>
			{({ item }) => (
				<li
					{...item}
					key={item.id}
				>{`${item.content} - provided header & footer`}</li>
			)}
		</List>
	);
};

export { Comments, CommentsWithHeaderAndFooter, CommentsWithOwnListItem };
