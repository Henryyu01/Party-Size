import GameRow from "./GameRow";
import { useState } from "react";
import { List } from "@mui/material";

const GameList = ({key, }) => {

    const [games, setGames] = useState([
        <GameRow
            key = "test"
            title = "Game"
            minPlayer = "1"
            maxPlayer = "4"
        />
    ]);

    return (
        <div>
            <List>
                {games}
            </List>
        </div>
    );
}

export default GameList