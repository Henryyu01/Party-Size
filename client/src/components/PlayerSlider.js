import { Box, Slider } from "@mui/material";


const PlayerSlider = ({value, onValueChanged}) => {

    return (
        <div>
            <Box sx ={{width: 200}}>
                <Slider
                    value={value}
                    onChange={onValueChanged}
                    valueLabelDisplay="auto"
                    disableSwap
                    min={1}
                    marks
                    max={10}
                    step={1}
                />
            </Box>
        </div>
    );
}

export default PlayerSlider