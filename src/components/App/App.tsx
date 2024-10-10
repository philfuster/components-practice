import "./App.css";
import Button from "../Button/Button";
import { CommentsWithHeaderAndFooter } from "../Comments/Comments";
import AppContainer from "./AppContainer/AppContainer";

function App() {
	return (
		<AppContainer>
			<CommentsWithHeaderAndFooter />
			<Button />
			<Button variant="secondary" />
			<Button variant="tertiary" />
		</AppContainer>
	);
}

export default App;
