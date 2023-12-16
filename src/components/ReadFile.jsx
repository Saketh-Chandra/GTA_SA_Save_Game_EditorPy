import { useState } from 'react';

function ReadFile() {
    const [filedata, setFiledata] = useState(null);
    window.filedata = filedata;
    
    const handleFile = (e) => {
        let textfile = e.target.files[0];
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
        <>
            <label htmlFor="bfile">Upload a file:</label>
            <input type="file" accept=".b" id="bfile" name="textfile"
                onChange={handleFile} />
        </>
    );
}

export default ReadFile