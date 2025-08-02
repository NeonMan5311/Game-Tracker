import { useState } from "react";
import "./Search.css"
//make the onSubmit change the seacrh query 
//and make a search api call to get the required game
export default function Search({ handleSearch }) {
	const [input, setInput] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		handleSearch(input.trim());
	};
    const handleInput=(event)=>{
        setInput(event.target.value)
    }
    console.log(input)
	return (
		<div className="searchBox">
			<form onSubmit={handleSubmit}>
				<input className="searchInput"
					type="search"
					id="search-input"
					value={input}
					placeholder="Search"
					onChange={handleInput}
				></input>
				<button className="submitButton" type="submit">-{">"}</button>
			</form>
		</div>
	);
}