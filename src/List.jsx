import { useGameList } from "./components/Context";
import "./Cards.css";
export default function List() {
	const { gameList} = useGameList();
	return gameList.map((game) => {
		return (
			<div className="gameCard">
				<div className="imageContainer">
					<img className="image" src={game.background_image} />
					<div className="imageGradient"></div>
				</div>
				<div className="infoContainer">
					<div className="nameContainer">{game.name}</div>
					<div className="infoBottom">
						<div className="rating">{game.metacritic}</div>
					</div>
				</div>
			</div>
		);
	});
}
