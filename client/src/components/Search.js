import { useState } from "react"
import GameList from "./GameList"
import SearchBar from "./SearchBar"

const Search = () => {

    const [searchText, setSearchText] = useState("")

    const onSearchTextChanged = (event) => {
        setSearchText(event.target.value)
    }

    const onSearchClick = () => {
        
    }

    return (
        <div>
            <SearchBar
                searchText={searchText}
                onSearchTextChanged={onSearchTextChanged}
                onSearchClicks={onSearchClick}
            />
            <GameList/>
        </div>
    );
}

export default Search