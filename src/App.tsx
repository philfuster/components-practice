import "./App.css";
import Button from "./components/Button/Button";
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
			<Button borderRadius={28} onClick={() => console.log("clicked")}>
				interesting
			</Button>
		</>
	);
}

export default App;
