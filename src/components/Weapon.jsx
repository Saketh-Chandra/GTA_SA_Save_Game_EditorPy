import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Select, MenuItem, Checkbox, FormControlLabel, Grid, InputLabel, Divider } from '@mui/material';
import {
    setWeaponSet,
    setParachute,
    setFlowers,
} from '../features/saveGameSlice';

function Weapon() {
    const dispatch = useDispatch();
    const {
        weapon
    } = useSelector((state) => state.saveGame);
    console.log("weaponSet ",weapon.weaponSet)

    const weaponSetList = [
        'Infinite Thug Weapon Set',
        'Infinite Nutter Weapon Set',
        'Infinite Professional Weapon Set',
    ];

    return (
        <div style={{ marginTop: 10 }}>
            <Typography variant="h5">Weapon</Typography>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <InputLabel>Weapon Type</InputLabel>
                    <Select
                        value={weapon.weaponSet}
                        onChange={(e) => { dispatch(setWeaponSet(e.target.value)) }}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Weapon Type',  }}
                        fullWidth
                    >
                        <MenuItem value="" disabled>
                            <em>Select Weapon Type</em>
                        </MenuItem>
                        {weaponSetList.map((weapon, index) => (
                            <MenuItem key={index} value={weapon}>
                                {weapon}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>


                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox id="parachute" name="parachute" checked={weapon.parachute} onChange={(e) => { dispatch(setParachute(e.target.checked)) }} />}
                        label="Parachute"
                    />
                </Grid>

                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox id="flowers" name="flowers" checked={weapon.flowers} onChange={(e) => { dispatch(setFlowers(e.target.checked)) }} />}
                        label="Flowers"
                    />
                </Grid>
            </Grid>
            <Divider variant="middle" />
        </div>
    );
}

export default Weapon;
