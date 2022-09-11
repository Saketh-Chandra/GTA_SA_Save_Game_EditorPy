var filedata = ''


function readfile(input) {
    let textfile = input.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(textfile);
    reader.onload = function (e) {
        // filedata = reader.result;
        var arrayBuffer = e.target.result;
        filedata = new Uint8Array(arrayBuffer);
    };
    reader.onerror = function () {
        console.log(reader.error);
    };

}

// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function () {
//         navigator.serviceWorker
//             .register("/GTA_SA_Save_Game_EditorPy/serviceWorker.js", {scope: '/GTA_SA_Save_Game_EditorPy/'})
//             .then(res => console.log("service worker registered"))
//             .catch(err => console.log("service worker not registered", err));
//     });
// }