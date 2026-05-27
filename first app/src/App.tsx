import ListGroup from "./component/ListGroup.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	let names = ["raj", "didi1", "didi2", "mummy", "papa"];

	return (
		<div>
			<ListGroup names ={names} Heading="Family" />
		</div>
	);
}

export default App;
