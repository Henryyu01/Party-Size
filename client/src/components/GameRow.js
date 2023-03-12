import { Box, Card, CardContent, Grid, ListItem, ListItemText, Typography } from "@mui/material"


const GameRow = ({key, title, minPlayer, maxPlayer}) => {

    return(
        <Card>
            <CardContent>
                <Typography>
                    {title}
                </Typography>
                <Typography>
                    {minPlayer}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default GameRow