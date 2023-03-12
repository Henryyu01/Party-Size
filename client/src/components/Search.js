import { useState } from "react"
import GameList from "./GameList"
import SearchBar from "./SearchBar"

const minDistance = 1

const Search = () => {

    const [searchText, setSearchText] = useState("");
    const [sliderValue, setSliderValue] = useState([1, 10]);

    const onSearchTextChanged = (event) => {
        setSearchText(event.target.value)
    }

    const onSearchClick = () => {
        
    }

    const onSliderChanged = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSliderValue([Math.min(newValue[0], sliderValue[1] - minDistance), sliderValue[1]]);
        } else {
            setSliderValue([sliderValue[0], Math.max(newValue[1], sliderValue[0] + minDistance)]);
        }
    }

    return (
        <div>
            <SearchBar
                searchText={searchText}
                onSearchTextChanged={onSearchTextChanged}
                onSearchClicks={onSearchClick}
                sliderValue={sliderValue}
                onSliderValueChanged={onSliderChanged}
            />
            <GameList/>
        </div>
    );
}

export default Search