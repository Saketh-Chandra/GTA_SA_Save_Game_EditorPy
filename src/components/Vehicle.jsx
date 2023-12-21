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
} from '@mui/material';

function Vehicle({ vehicles, garage, vehicleData, updateVehicle }) {
  const handleVehicleChange = (e) => {
    let { name, value, checked } = e.target;
    if (name !== 'name') {
      value = checked;
    }
    updateVehicle(garage, {
      ...vehicleData,
      [name]: value,
    });
  };

  return (
    <Card>
      <CardHeader title={`Garage: ${garage}`} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Select Vehicle:</Typography>
            <FormControl fullWidth>
              {/* <InputLabel htmlFor="vehicle-name">Vehicle</InputLabel> */}
              <Select
                value={vehicleData.name}
                onChange={handleVehicleChange}
                inputProps={{ name: 'name', id: 'vehicle-name' }}
              >
                <MenuItem value="">
                  <em>Select a Vehicle</em>
                </MenuItem>
                {Object.entries(vehicles).map(([id, name]) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Vehicle;
