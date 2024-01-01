import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Typography,
    Grid,
    Button
} from '@mui/material';
import {
    addVehicle,
} from '../features/saveGameSlice';
import Vehicle from './Vehicle';



function Garage() {
    const dispatch = useDispatch();
    const {
        vehicles
    } = useSelector((state) => state.saveGame);


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Vehicles & Garages
                    </Typography>
                </Grid>

                {
                    vehicles.map((vehicle, index) => (
                        <Grid item xs={12} md={6} key={index} >

                            <Vehicle
                                vehicleData={vehicle}
                                index={index}

                            />
                        </Grid>
                    ))
                }
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => {
                        dispatch(addVehicle())
                    }
                    }>
                        Add Vehicle
                    </Button>
                </Grid>
            </Grid>
           
        </>
    );
}

export default Garage;
