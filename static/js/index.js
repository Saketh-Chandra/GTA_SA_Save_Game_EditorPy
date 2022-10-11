function showVal(newVal, showNumber){
    document.getElementById(showNumber).innerHTML="(" + newVal+ ")";
}

const submithandle = (e) => {
    weapons = document.getElementById('weapons').value
    garage = document.getElementById('garage').value
    muscle = document.getElementById("muscle").value
    health = document.getElementById("Health").checked
    armor = document.getElementById("Armor").checked
    run = document.getElementById("Run").checked
    money = document.getElementById("Money").checked
    fireproof = document.getElementById("Fireproof").checked
    fat = document.getElementById("fat").value
    wantedlevel = document.getElementById("wantedlevel").value
    sexappeal = document.getElementById("sexappeal").value
    stamina = document.getElementById("stamina").value

    config = {
        weapons: weapons,
        garage: garage,
        muscle: muscle,
        health: health,
        armor: armor,
        run: run,
        fat: fat,
        money: money,
        fireproof: fireproof,
        wantedlevel: wantedlevel,
        sexappeal: sexappeal,
        stamina: stamina,
    }

    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config));

    $('<a href="data:' + data + '" download="data.json">download JSON</a>').appendTo('#generateConfig');
}


form = document.getElementById("form")
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    submithandle
});