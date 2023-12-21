import React, { useState } from 'react';
import { Typography, Slider, Checkbox, FormControlLabel, Grid, Divider } from '@mui/material';

function Body() {
    const [fat, setFat] = useState(0);
    const [muscle, setMuscle] = useState(0);
    const [sexAppeal, setSexAppeal] = useState(0);
    const [stamina, setStamina] = useState(0);
    // const [lungCapacity, setLungCapacity] = useState(0);
    const [fireproof, setFireproof] = useState(false);

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
                        value={fat}
                        max={1000}
                        min={0}
                        onChange={(e, value) => setFat(value)}
                    />
                </Grid>

                <Grid item xs={12} md={6}>

                    <Typography id="muscle" gutterBottom>
                        Muscle
                    </Typography>
                    <Slider
                        id="muscle"
                        name="muscle"
                        value={muscle}
                        max={1000}
                        min={0}
                        onChange={(e, value) => setMuscle(value)}
                    />
                </Grid>

                <Grid item xs={12} md={6}>

                    <Typography id="sexAppeal" gutterBottom>
                        Sex Appeal
                    </Typography>
                    <Slider
                        id="sexAppeal"
                        name="sexAppeal"
                        value={sexAppeal}
                        max={2000}
                        min={0}
                        onChange={(e, value) => setSexAppeal(value)}
                    />
                </Grid>

                <Grid item xs={12} md={6}>

                    <Typography id="stamina" gutterBottom>
                        Stamina
                    </Typography>
                    <Slider
                        id="stamina"
                        name="stamina"
                        value={stamina}
                        max={1000}
                        min={0}
                        onChange={(e, value) => setStamina(value)}
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
                        onChange={(e, value) => setLungCapacity(value)}
                    />
                </Grid> */}

                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={<Checkbox id="fireproof" name="fireproof" checked={fireproof} onChange={(e) => setFireproof(e.target.checked)} />}
                        label="Fireproof"
                    />
                </Grid>
            </Grid>
            <Divider variant="middle" />
        </div>
    );
}

export default Body;
