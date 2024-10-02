import "./App.css";
import Button from "./components/Button/Button";
import {
	Comments,
	CommentsWithHeaderAndFooter,
	CommentsWithOwnListItem,
} from "./components/CommentsList/Comments";

function App() {
	return (
		<>
			<Comments />
			<CommentsWithOwnListItem />
			<CommentsWithHeaderAndFooter />
			<Button />
			<Button variant="secondary" />
			<Button variant="tertiary" />
		</>
	);
}

export default App;
