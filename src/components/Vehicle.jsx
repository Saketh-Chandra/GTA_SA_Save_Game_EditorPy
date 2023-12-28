import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Autocomplete,
  TextField,
  ListItemText,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  vehiclesList,
  radioStations,
  garageList,
} from './utils/vehichles';

import {
  removeVehicle,
  updateVehicle,
} from '../features/saveGameSlice';

function Vehicle({ vehicleData, index }) {

  const dispatch = useDispatch();

  const handleVehicleChange = ({ target: { name, value, checked } }) => {
    console.log("name", name, "value", value, "checked", checked)
    if (name !== 'id' && name !== 'radioStation' && name !== 'location') {
      value = checked;
    }
    if (name === 'radioStation') {
      value = parseInt(value);
    }



    const updatedvehicleData = {
      ...vehicleData,
      [name]: value
    }

    dispatch(updateVehicle({ index, vehicles: updatedvehicleData }));
  };

  // console.log("vehicleData", vehicleData)

  return (
    <Card>
      <CardHeader title={

        <div style={
          {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

          }
        }>
          <Typography variant="h6">
            {vehicleData.id ? `Vehicle ${vehiclesList[vehicleData.id]}` : 'Select a Vehicle'}
          </Typography>
          <Button onClick={() => { dispatch(removeVehicle(index)) }} style={{ margin: "-0.5vh" }}>
            <DeleteIcon sx={{
              color: "red",
            }} />
          </Button>
        </div>
      }

      />
      <CardContent>


        <Grid container spacing={2}>

          <Grid item xs={12}>
            <InputLabel >Select Garages:</InputLabel>
            <Select
              value={vehicleData.location}
              label="Select Garages"
              onChange={handleVehicleChange}
              displayEmpty
              fullWidth
              inputProps={{ name: 'location', id: 'location' }}
            >
              <MenuItem value="" disabled>
              </MenuItem>
              {garageList.map((garage) => (
                <MenuItem key={garage.garageName} value={garage.garageID}>
                  <ListItemText primary={garage.garageName} />
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Select Vehicle:</InputLabel>

            <FormControl fullWidth>
              <Autocomplete
                options={Object.values(vehiclesList)}
                getOptionLabel={(option) => option}
                value={vehiclesList[vehicleData.id] || null}
                onChange={(_, value) => handleVehicleChange({ target: { name: 'id', value: Object.keys(vehiclesList).find(key => vehiclesList[key] === value) } })}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>

            <InputLabel>Additional Options:</InputLabel>

            <FormControlLabel
              control={
                <Checkbox
                  checked={vehicleData.fireProof}
                  onChange={handleVehicleChange}
                  name="fireProof"
                  color="primary"
                />
              }
              label="Fire Proof"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={vehicleData.bulletProof}
                  onChange={handleVehicleChange}
                  name="bulletProof"
                  color="primary"
                />
              }
              label="Bullet Proof"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vehicleData.bassBoost}
                  onChange={handleVehicleChange}
                  name="bassBoost"
                  color="primary"
                />
              }
              label="Bass Boost"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vehicleData.hydraulics}
                  onChange={handleVehicleChange}
                  name="hydraulics"
                  color="primary"
                />
              }
              label="Hydraulics"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vehicleData.nNitrous}
                  onChange={handleVehicleChange}
                  name="nNitrous"
                  color="primary"
                />
              }
              label="Nitrous"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vehicleData.collisionProof}
                  onChange={handleVehicleChange}
                  name="collisionProof"
                  color="primary"
                />
              }
              label="Collision Proof"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vehicleData.meleeProof}
                  onChange={handleVehicleChange}
                  name="meleeProof"
                  color="primary"
                />
              }
              label="Melee Proof"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vehicleData.explosionProof}
                  onChange={handleVehicleChange}
                  name="explosionProof"
                  color="primary"
                />
              }
              label="Explosion Proof"
            />
            <Typography variant="h6">Radio Station:</Typography>
            <FormControl fullWidth>
              {/* <InputLabel htmlFor="radio-station">Radio Station</InputLabel> */}
              <Select
                value={vehicleData.radioStation}
                onChange={handleVehicleChange}
                inputProps={{ name: 'radioStation', id: 'radio-station' }}
              >

                {Object.entries(radioStations).map(([id, station]) => (
                  <MenuItem key={id} value={id}>
                    {station}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Vehicle;
