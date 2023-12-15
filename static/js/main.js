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

// class py-error, make them hidden them when every it appears
function hide_py_error() {
    var error = document.getElementsByClassName("py-error");
    for (var i = 0; i < error.length; i++) {
        error[i].style.display = "none";
    }

}


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/GTA_SA_Save_Game_EditorPy/service-worker.js", { scope: '/GTA_SA_Save_Game_EditorPy/' })
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}