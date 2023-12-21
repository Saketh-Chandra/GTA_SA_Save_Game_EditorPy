import React, { useState } from 'react';
import { Typography, Select, MenuItem, InputLabel, Grid, Box, Chip } from '@mui/material';
import Vehicle from './Vehicle';

const garageList = ['Ganton garage (Grove St.)', 'Santa Maria Beach garage', 'Muholland garage'];
const allVehicles = {
    "4": "Car",
    "2": "Bike",
};

function Garage() {
    const [selectedGarages, setSelectedGarages] = useState([]);
    const [vehicles, setVehicles] = useState({});

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
                    onChange={(e) => setSelectedGarages(e.target.value)}
                    displayEmpty
                    fullWidth
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                >
                    {garageList.map((garage) => (
                        <MenuItem key={garage} value={garage}>
                            {garage}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>

            {selectedGarages.map((garage) => (
                <Grid item xs={12} md={6} key={garage}
                
                    >
                    <Vehicle
                        vehicles={allVehicles}
                        garage={garage}
                        vehicleData={vehicles[garage] || {
                            name: "",
                            fireProof: false,
                            bulletProof: false,
                        }}
                        updateVehicle={updateVehicle}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Garage;
