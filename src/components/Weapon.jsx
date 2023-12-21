import React, { useState } from 'react';
import { Typography, Select, MenuItem, Checkbox, FormControlLabel, Grid, InputLabel, Divider } from '@mui/material';

function Weapon() {
    const [weaponType, setWeaponType] = useState('');
    const [parachute, setParachute] = useState(false);
    const [flowers, setFlowers] = useState(false);
    const weaponSet = [
        'Infinite Thug Weapon Set',
        'Infinite Nutter Weapon Set',
        'Infinite Professional Weapon Set',
    ];

    return (
        <div style={{ marginTop: 10 }}>
            <Typography variant="h4">Weapon</Typography>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <InputLabel>Weapon Type</InputLabel>
                    <Select
                        value={weaponType}
                        onChange={(e) => setWeaponType(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Weapon Type' }}
                        fullWidth
                    >
                        <MenuItem value="" disabled>
                        <em>Select Weapon Type</em>
                        </MenuItem>
                        {weaponSet.map((weapon, index) => (
                            <MenuItem key={index} value={weapon}>
                                {weapon}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>


                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox id="parachute" name="parachute" checked={parachute} onChange={(e) => setParachute(e.target.checked)} />}
                        label="Parachute"
                    />
                </Grid>

                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox id="flowers" name="flowers" checked={flowers} onChange={(e) => setFlowers(e.target.checked)} />}
                        label="Flowers"
                    />
                </Grid>
            </Grid>
            <Divider variant="middle" />
        </div>
    );
}

export default Weapon;
