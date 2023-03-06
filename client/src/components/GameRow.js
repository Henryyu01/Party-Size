import { Box, Grid, ListItem, ListItemText } from "@mui/material"


const GameRow = ({key, title, minPlayer, maxPlayer}) => {

    return(
        <div>
            <ListItem>
                <ListItemText 
                    primary = {title} 
                    secondary = {('min: ' + minPlayer + ', max: ' + maxPlayer)}
                />
            </ListItem>
        </div>
    )
}

export default GameRow