import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Checkbox, FormControlLabel, Grid, Divider, Typography, InputAdornment } from '@mui/material';
import ReadFile from './ReadFile';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import RotatingIcon from './utils/RotatingIcon';
import {
    setHealth,
    setArmor,
    setMoney,
    setWantedLevel,
    setRoadBlocks_SF,
    setRoadBlocks_LV,
} from '../features/saveGameSlice';

function General() {

    const dispatch = useDispatch();

    const {
        health,
        armor,
        money,
        wantedLevel,
        roadBlocks_SF,
        roadBlocks_LV
    } = useSelector(state => state.saveGame);



    console.log("health", health, "armor", armor, "money", money, "wantedLevel", wantedLevel, "roadBlocks_SF", roadBlocks_SF, "roadBlocks_LV", roadBlocks_LV)


    return (
        <div>
            <Typography variant="h4">General</Typography>
            <ReadFile />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} container
                    alignItems="center"
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-around'
                >
                    <TextField
                        label="Money"
                        type="number"
                        id="money"
                        fullWidth
                        value={money}
                        InputProps={{
                            inputProps: { min: 0, max: 999999999 },
                            startAdornment: <InputAdornment position="start">
                                <RotatingIcon icon={AttachMoneyIcon} duration={2} color='green' />
                            </InputAdornment>
                        }}

                        onChange={(e) => {
                            dispatch(setMoney(e.target.value))
                        }}
                        sx={{ margin: 1 }}
                    />
                    <Button variant="contained" color="primary" onClick={() => {
                        dispatch(setMoney(999999999))
                    }}>
                        Max Money
                    </Button>
                </Grid>

                <Grid item xs={12} md={6} container
                    alignItems="center"
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-around'
                >
                    <TextField
                        label="Health"
                        type="number"
                        id="health"
                        value={health}
                        fullWidth
                        InputProps={{
                            inputProps: { min: 0, max: 999999999 },
                            startAdornment: <InputAdornment position="start"><LocalHospitalIcon style={{ color: "red" }} /></InputAdornment>
                        }}
                        onChange={(e) => {
                            dispatch(setHealth(e.target.value))
                        }}
                        sx={{ margin: 1 }}
                    />
                    <Button variant="contained" color="primary" onClick={() => {
                        dispatch(setHealth(999999999))
                    }}>
                        Max Health
                    </Button>
                </Grid>

                <Grid item xs={12} md={6}
                    alignItems="center"
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-around'
                >
                    <TextField
                        label="Armor"
                        type="number"
                        id="armor"
                        value={armor}
                        fullWidth
                        InputProps={{
                            inputProps: { min: 0, max: 999999999 },
                            startAdornment: <InputAdornment position="start"><SecurityIcon style={{ color: "gray" }} /></InputAdornment>
                        }}

                        onChange={(e) => {
                            dispatch(setArmor(e.target.value))
                        }}
                        sx={{ margin: 1 }}
                    />
                    <Button variant="contained" color="primary" onClick={() => {
                        dispatch(setArmor(999999999))
                    }}>
                        Max Armor
                    </Button>
                </Grid>

                <Grid item xs={12} md={6} container
                    alignItems="center"
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-around'
                >
                    <TextField
                        label="Wanted Level"
                        type="number"
                        id="wantedLevel"
                        value={wantedLevel}
                        fullWidth
                        InputProps={{
                            inputProps: { min: 0, max: 6 },
                            startAdornment: <InputAdornment position="start"> {
                                // show stars based on wanted level
                                (() => {
                                    let stars = [];
                                    for (let i = 0; i < wantedLevel; i++) {
                                        stars.push(<StarHalfIcon key={`star_${i}`} style={{ color: "gold" }} />);
                                    }
                                    return stars;
                                })()
                            } </InputAdornment>
                        }}
                        onChange={(e) => {
                            dispatch(setWantedLevel(e.target.value))
                        }}
                        sx={{ margin: 1 }}
                    />
                    <Button variant="contained" color="primary" onClick={() => {
                        dispatch(setWantedLevel(6))
                    }}>
                        Max Wanted Level
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => {
                        dispatch(setWantedLevel(0))
                    }}>
                        Clear Wanted Level
                    </Button>
                </Grid>


                <Grid item xs={12} container alignItems="center">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={roadBlocks_SF}
                                onChange={(e) => {
                                    dispatch(setRoadBlocks_SF(e.target.checked))
                                }}
                                id="roadBlocks_SF" />
                        }
                        label="Unblock/Block Roads between Los Santos and San Fierro"
                    />
                </Grid>

                <Grid item xs={12} container alignItems="center">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={roadBlocks_LV}
                                onChange={(e) => {
                                    dispatch(setRoadBlocks_LV(e.target.checked))
                                }}
                                id="roadBlocks_LV" />
                        }
                        label="Unblock/Block Roads between San Fierro and Las Venturas"
                    />
                </Grid>
            </Grid>
            <Divider variant="middle" />
        </div >
    );
}

export default General;
