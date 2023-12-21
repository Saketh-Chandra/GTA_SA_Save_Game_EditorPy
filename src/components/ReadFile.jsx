import { useState } from 'react';
import { Button, Container, Input, TextField, Typography, InputAdornment } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
function ReadFile() {
    const [filedata, setFiledata] = useState(null);
    const [fileName, setFileName] = useState('');
    window.filedata = filedata;

    const handleFile = (e) => {
        let textfile = e.target.files[0];
        setFileName(textfile.name);
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
    return (



        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
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