import "./App.css";
import {
	Comments,
	CommentsWithHeaderAndFooter,
	CommentsWithOwnListItem,
} from "./components/Comments/Comments";

function App() {
	return (
		<>
			<Comments />
			<CommentsWithOwnListItem />
			<CommentsWithHeaderAndFooter />
		</>
	);
}

export default App;
