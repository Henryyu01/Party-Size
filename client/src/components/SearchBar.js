import { Icon, IconButton, InputBase, styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/system';
import PlayerSlider from './PlayerSlider';

const SearchContainer = styled('div')({
  position: 'relative',
  padding: 8,
  backgroundColor: 'lightgrey',
  borderRadius: 4,
  display: 'flex',
});

const SearchIconContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
})

const SearchBar = ({
  searchText, 
  onSearchTextChanged, 
  onSearchClick,
  sliderValue,
  onSliderValueChanged,
}) => {

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <SearchContainer>
          <SearchIconContainer>
            <SearchIcon/>
          </SearchIconContainer>
          <InputBase/>
        </SearchContainer>
        <PlayerSlider
          value = {sliderValue}
          onValueChanged = {onSliderValueChanged}
        />
        <IconButton
          onClick = {onSearchClick}
        >
          <SearchIcon/>
        </IconButton>
      </Stack>
    </div>
  );
}

export default SearchBar;