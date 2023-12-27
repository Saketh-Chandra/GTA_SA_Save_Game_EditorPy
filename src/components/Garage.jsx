import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Typography,
    Select,
    MenuItem,
    InputLabel,
    Grid, Box,
    Chip, Checkbox,
    ListItemText
} from '@mui/material';
import {
    setSelectedGarages,
} from '../features/saveGameSlice';
import Vehicle from './Vehicle';
import { garageList } from './utils/vehichles';


function Garage() {
    const dispatch = useDispatch();
    const { selectedGarages } = useSelector((state) => state.saveGame);
    const [vehicles, setVehicles] = useState({});

    console.log("vehicles", vehicles)

    const updateVehicle = (garage, vehicleData) => {
        setVehicles((prevVehicles) => ({
            ...prevVehicles,
            [garage]: vehicleData,
        }));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">Garage Vehicle</Typography>
            </Grid>

            <Grid item xs={12}>
                <InputLabel>Select Garages:</InputLabel>
                <Select
                    multiple
                    value={selectedGarages}
                    onChange={(e) => dispatch(setSelectedGarages(e.target.value))}
                    displayEmpty
                    fullWidth
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value.garageName} label={value.garageName} />
                            ))}
                        </Box>
                    )}
                >
                    {garageList.map((garage) => (
                        <MenuItem key={garage.garageName} value={garage}>
                            <Checkbox checked={selectedGarages.indexOf(garage) > -1} />
                            <ListItemText primary={garage.garageName} />

                        </MenuItem>
                    ))}
                </Select>
            </Grid>

            {
                selectedGarages && selectedGarages.map((garage) => (
                    <Grid item xs={12} md={6} key={garage.garageName} >
                        <Vehicle
                            garage={garage}
                            vehicleData={
                                vehicles[garage.garageName] || {
                                    id: '',
                                    fireProof: false,
                                    bulletProof: false,
                                    explosionProof: false,
                                    collisionProof: false,
                                    meleeProof: false,
                                    bassBoost: false,
                                    hydraulics: false,
                                    nNitrous: false,
                                    radioStation: 0,

                                }}
                            updateVehicle={updateVehicle}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Garage;
