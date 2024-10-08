import "./App.css";
import Button from "../Button/Button";
import { CommentsWithHeaderAndFooter } from "../Comments/Comments";
import Container from "../Container/Container";

function App() {
	return (
		<Container>
			<CommentsWithHeaderAndFooter />
			<Button />
			<Button variant="secondary" />
			<Button variant="tertiary" />
		</Container>
	);
}

export default App;
