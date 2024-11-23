import "./App.css";
import gif from "./assets/der_burger.gif";

function App() {
	return (
		<>
			<div className="flex-center">
				<img className="background-burger" alt="börger" src={gif} />
			</div>
		</>
	);
}

export default App;
