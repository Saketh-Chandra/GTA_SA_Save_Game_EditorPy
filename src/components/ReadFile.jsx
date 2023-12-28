import { useState, useEffect } from 'react';
import { Button, Container, Input, TextField, Typography, InputAdornment, useMediaQuery, } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { useDispatch, useSelector } from 'react-redux';
import {
    setFileName,
    setHealth,
    setArmor,
    setMoney,
    setInfiniteRun,
    setWantedLevel,
    setFireproof,
    setFat,
    setStamina,
    setMuscle,
    setSexAppeal,
    setRoadBlocks_SF,
    setRoadBlocks_LV,
    setVehicle,


} from '../features/saveGameSlice';

function convertToNumber(value) {
    if (value === 'inf') {
        return 999999999
    } else {
        return value
    }
}
function ReadFile() {
    const dispatch = useDispatch();

    const [filedata, setFiledata] = useState(null);
    const { fileName } = useSelector((state) => state.saveGame);

    window.filedata = filedata;

    useEffect(() => {
        console.info('window.getSaveFileInfo function is ready');
        window.filedata = filedata;
        console.log(filedata)
        // Check if window.getSaveFileInfo is a function before calling it
        if (typeof window.getSaveFileInfo === 'function') {
            const data = window.getSaveFileInfo() || "{}"
            const object_data = JSON.parse(data.toString())
            console.log(object_data)

            // General
            dispatch(setHealth(convertToNumber(object_data.Health)))
            dispatch(setArmor(convertToNumber(object_data.Armor)))
            dispatch(setMoney(convertToNumber(object_data.Money)))
            dispatch(setRoadBlocks_SF(!!object_data.roadblocks_SF))
            dispatch(setRoadBlocks_LV(!!object_data.roadblocks_LV))

            //Body
            dispatch(setFat(convertToNumber(object_data.Fat)))
            dispatch(setStamina(convertToNumber(object_data.Stamina)))
            dispatch(setMuscle(convertToNumber(object_data.Muscle)))
            dispatch(setSexAppeal(convertToNumber(object_data.SexAppeal)))
            dispatch(setFireproof(!!object_data.Fireproof))
            dispatch(setInfiniteRun(!!object_data.InfiniteRun))

            //Vehicle
            console.log("object_data vehicle", object_data.vehicle)

            const vehicles = object_data.vehicle.map((vehicle) => {
                return {
                    location: vehicle.location,
                    id: vehicle.vehicle_ID,
                    bulletProof: !!vehicle.bulletproof,
                    fireProof: !!vehicle.fireproof,
                    explosionProof: !!vehicle.explosion_proof,
                    collisionProof: !!vehicle.collision_proof,
                    meleeProof: !!vehicle.melee_proof,
                    bassBoost: !!vehicle.bass_boost,
                    hydraulics: !!vehicle.hydraulics,
                    nNitrous: !!vehicle.nNitrous,
                    radioStation: vehicle.radio_station,
                }


            })
            console.log(vehicles)

            // let vehicle = {
            //     location: "location",
            //     id: "vehicle_ID",
            //     bulletProof: "bulletproof",
            //     fireProof: "fireproof",
            //     explosionProof: "explosion_proof",
            //     collisionProof: "collision_proof",
            //     meleeProof: "melee_proof",
            //     bassBoost: "bass_boost",
            //     hydraulics: "hydraulics",
            //     nNitrous: "nNitrous",
            //     radioStation: "radio_station",

            // }
            dispatch(setVehicle(vehicles))



        } else {
            // Handle the case where window.getSaveFileInfo is not a function
            console.info('window.getSaveFileInfo function is not ready');
        }

    }, [filedata])

    const handleFile = (e) => {
        let textfile = e.target.files[0];
        dispatch(setFileName(textfile.name))
        let reader = new FileReader();
        reader.readAsArrayBuffer(textfile);
        reader.onload = function (e) {
            var arrayBuffer = e.target.result;
            setFiledata(new Uint8Array(arrayBuffer))

        };
        reader.onerror = function () {
            console.log(reader.error);
        };

    }
    const isMobile = useMediaQuery('(max-width:600px)');
    return (



        <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: isMobile ? '10px' : '0',
        }}>
            <Typography variant="h6">Upload Save file:</Typography>

            {/* <Input
                type="file"
                accept=".b"
                id="bfile"
                name="textfile"
                onChange={handleFile}
                // style={{ display: 'none' }}
                inputProps={{ multiple: false }}
            /> */}

            <TextField
                id="filename"
                label="File Name"
                value={fileName}
                InputProps={{
                    readOnly: true,
                    startAdornment: <InputAdornment position="start"><AttachmentIcon style={{
                        color: "silver"
                    }} />
                    </InputAdornment>

                }}

                sx={{ margin: 1 }}
            />
            <Typography htmlFor="bfile" component="label">
                <Button component="span" variant="contained" color="primary">
                    Choose File
                </Button>
                <Input
                    type="file"
                    accept=".b"
                    id="bfile"
                    name="textfile"
                    onChange={handleFile}
                    style={{ display: 'none' }}
                    inputProps={{ multiple: false }}
                />
            </Typography>

            {/* <label htmlFor="bfile">
                <Button component="span" variant="contained" color="primary">
                    Choose File
                </Button>
            </label> */}
        </div>


    );
}

export default ReadFile