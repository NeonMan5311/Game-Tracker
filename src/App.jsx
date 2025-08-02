import { useState } from "react";
import "./App.css";
import Cards from "./Cards";
import List from "./List";
function App() {
	const [pageNo, setPage] = useState(0);
	return (
		<div className="app">
			<div className="NavBar">
				<ul className="navList">
					<li onClick={() => setPage(0)}>Home</li>
					<li onClick={() => setPage(2)}>My Lists</li>
					<li onClick={() => setPage(1)}>Discover Games</li>
					<li className="pricing">
						Pricing
						<span className="pricingHover">It's Free! duh</span>
						<div className="border"></div>
					</li>
				</ul>
			</div>
			{pageNo == 0 && (
				<div className="mainBody">
					<ul className="bodyList">
						<li>Discover.</li>
						<li>Organize.</li>
						<li>Explore.</li>
						<li>All at One Place.</li>
					</ul>
					<div className="gradient"></div>
				</div>
			)}
			{pageNo == 1 && (
				<div className="gamesData">
					<Cards />
				</div>
			)}
			{pageNo == 2 && (
				<div className="gamesList">
					<List />
				</div>
			)}
		</div>
	);
}

export default App;
