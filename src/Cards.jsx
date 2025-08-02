import { useState } from "react";
import "./Cards.css";
import Search from "./Search";
import { useQuery } from "@tanstack/react-query";
import GameCard from "./GameCard";
export default function Cards() {
	const [searchTerm, setsearchTerm] = useState("");
	const fetchGames = async () => {
		let response;
		if (searchTerm == "") {
			response = await fetch(
				"https://api.rawg.io/api/games?key=8749557bdfb845f59b65e74b0d392286&page=1&page_size=10"
			);
		} else {
			response = await fetch(
				`https://api.rawg.io/api/games?key=8749557bdfb845f59b65e74b0d392286&page=1&page_size=10&ordering=-rating&search=${searchTerm}`
			);
		}
		if (!response.ok) {
			throw new Error("Error Ocurred");
		}
		return await response.json();
	};

	const { data, isLoading } = useQuery({
		queryKey: [searchTerm],
		queryFn: fetchGames,
	});
	if (isLoading) {
		return <div>Loading...</div>;
	}

	const handleSearch = (searchItem) => {
		setsearchTerm(searchItem);
	};
	return (
		<>
			<Search handleSearch={handleSearch} />
			<div className="gameDisplay">
				{data.results.map((game) => {
					return <GameCard game={game} />;
				})}
			</div>
		</>
	);
}
