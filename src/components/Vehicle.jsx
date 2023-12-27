import React from 'react';
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
  TextField
} from '@mui/material';

import {
  vehiclesList,
  radioStations
} from './utils/vehichles';

function Vehicle({ garage, vehicleData, updateVehicle },) {
  const handleVehicleChange = ({ target: { name, value, checked } }) => {
    if (name !== 'id' && name !== 'radioStation') {
      value = checked;
    }
    if (name === 'radioStation') {
      value = parseInt(value);
    }
    updateVehicle(garage.garageName, {
      ...vehicleData,
      [name]: value,
    });
  };
  console.log("Vid", vehiclesList[vehicleData.id])
  console.log(vehicleData)
  return (
    <Card>
      <CardHeader title={`Garage: ${garage.garageName}`} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Select Vehicle:</Typography>
            <FormControl fullWidth>
              {/* <InputLabel htmlFor="vehicle-name">Vehicle</InputLabel> */}
              <Autocomplete
                options={Object.entries(vehiclesList).map(([id, name]) => ({ id, name }))}
                getOptionLabel={(option) => option.name}
                value={Object.keys(vehiclesList).includes(vehicleData.id) ? { id: vehicleData.id, name: vehiclesList[vehicleData.id] } : null}
                onChange={(_, newValue) => handleVehicleChange({ target: { name: 'id', value: newValue ? newValue.id : '' } })}
                renderInput={(params) => (
                  <TextField {...params} label="Select a Vehicle" />
                )}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Additional Options:</Typography>

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
                  checked={vehicleData.nitrous}
                  onChange={handleVehicleChange}
                  name="nitrous"
                  color="primary"
                />
              }
              label="Bullet Proof"
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
