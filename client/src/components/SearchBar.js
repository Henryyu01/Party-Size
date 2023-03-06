import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/system';

const SearchBar = ({searchText, onSearchTextChanged, onSearchClick}) => {

  return (
    <div className="Search">
      <Stack direction="row" spacing={2}>
        <TextField
          id = "search-bar"
          value = {searchText}
          onChange = {onSearchTextChanged} 
          variant="outlined"
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