import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Slider, Checkbox, FormControlLabel, Grid, Divider } from '@mui/material';
import {
    setFat,
    setMuscle,
    setSexAppeal,
    setStamina,
    setFireproof,
    setInfiniteRun,
} from '../features/saveGameSlice';

function Body() {
    const dispatch = useDispatch();
    const {
        Fat,
        Muscle,
        SexAppeal,
        Stamina,
        Fireproof,
        infiniteRun,
    } = useSelector(state => state.saveGame);

    console.log("Fireproof", Fireproof, "Fat", Fat, "Stamina", Stamina, "Muscle", Muscle, "SexAppeal", SexAppeal, "infiniteRun", infiniteRun)


    return (
        <div style={{ marginTop: 10 }}>
            <Typography variant="h4">Body</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    <Typography id="fat" gutterBottom>
                        Fat
                    </Typography>
                    <Slider
                        id="fat"
                        name="fat"
                        valueLabelFormat={(value) => `${value / 10}%`}
                        valueLabelDisplay="auto"
                        value={Fat}
                        max={1000}
                        min={0}
                        onChange={(e) => dispatch(setFat(e.target.value))}
                    />
                </Grid>

                <Grid item xs={12} md={6}>

                    <Typography id="muscle" gutterBottom>
                        Muscle
                    </Typography>
                    <Slider
                        id="muscle"
                        name="muscle"
                        valueLabelFormat={(value) => `${value / 10}%`}
                        value={Muscle}
                        max={1000}
                        min={0}
                        valueLabelDisplay="auto"
                        onChange={(e) => dispatch(setMuscle(e.target.value))}
                    />
                </Grid>

                <Grid item xs={12} md={6}>

                    <Typography id="sexAppeal" gutterBottom>
                        Sex Appeal
                    </Typography>
                    <Slider
                        id="sexAppeal"
                        name="sexAppeal"
                        valueLabelFormat={(value) => `${value / 20}%`}
                        valueLabelDisplay="auto"
                        value={SexAppeal}
                        max={2000}
                        min={0}
                        onChange={(e) => dispatch(setSexAppeal(e.target.value))}
                    />
                </Grid>

                <Grid item xs={12} md={6}>

                    <Typography id="stamina" gutterBottom>
                        Stamina
                    </Typography>
                    <Slider
                        id="stamina"
                        name="stamina"
                        valueLabelFormat={(value) => `${value / 10}%`}
                        valueLabelDisplay="auto"
                        value={Stamina}
                        max={1000}
                        min={0}
                        onChange={(e) => dispatch(setStamina(e.target.value))}
                    />
                </Grid>

                {/* <Grid item xs={12} md={6}>
                   
                    <Typography id="lungCapacity" gutterBottom>
                        Lung Capacity
                    </Typography>
                    <Slider
                        id="lungCapacity"
                        name="lungCapacity"
                        value={lungCapacity}
                        max={1000}
                        min={0}
                        onChange={(e) => dispatch(setlungCapacity(e.target.value))}
                    />
                </Grid> */}

                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="fireproof"
                                name="fireproof"
                                checked={Fireproof}
                                onChange={(e) => dispatch(setFireproof(e.target.checked))}
                            />}
                        label="Fireproof"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="infiniteRun"
                                name="infiniteRun"
                                checked={infiniteRun}
                                onChange={(e) => dispatch(setInfiniteRun(e.target.checked))}
                            />}
                        label="Infinite Run"
                    />
                </Grid>
            </Grid>
            <Divider variant="middle" />
        </div>
    );
}

export default Body;
