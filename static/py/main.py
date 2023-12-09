from js import document, console, Uint8Array, window, File, alert

from GTA_SA_Save_Game_Editor import SaveFileInfo as _SaveFileInfo, logging


class SaveFileInfo(_SaveFileInfo):
    def processFile(self):
        from js import filedata
        if filedata:
            logging.info("File Processing...")
            return bytearray(filedata)
        else:
            alert("File not uploaded")
            raise Exception("File not uploaded")

    def savefile(self, filename):
        self.writeChecksum()
        logging.info(f"Saving.... file:{filename}")
        output_file = File.new([Uint8Array.new(self.data)], filename, {type: "application/octet-stream"})
        link = document.createElement('a')
        link.href = window.URL.createObjectURL(output_file)
        link.textContent = f"Download Save file: {filename}"
        link.download = filename
        link.click()
        console.log(link)
        document.getElementById("output").appendChild(link)



def main(*args, **kwargs):
    save = SaveFileInfo(filename=None)

    # save.Money(Money=2020202)
    # save.ProfessionalSet(parachute=True)
    # save.Fireproof()
    # save.InfiniteRun()
    # save.WantedLevel(Chaoslevel=0)
    # save.Health()
    # save.Armor()
    # save.GarageVehicle(location='cjsafe', vehicle_ID=432)
    # save.GarageVehicle(location='CEsafe1', vehicle_ID=415)
    # save.GarageVehicle(location='beacsv', vehicle_ID=415, nNitrous=10)
    # save.Fat(level=0)
    # save.Muscle(level=99)
    # save.Stamina(level=999)
    # save.SexAppeal(level=1999)

    weapons = document.getElementById('weapons').value
    parachute = document.getElementById("Parachute").checked
    if weapons == "NutterSet":
        save.NutterSet(parachute=parachute)
    elif weapons == "ThugSet":
        save.ThugSet(parachute=parachute)
    elif weapons == "ProfessionalSet":
        save.ProfessionalSet(parachute=parachute)
    else:
        pass

    for i in  document.getElementById('garage').selectedOptions:
        save.GarageVehicle(location=i.value, vehicle_ID=411)

    health = document.getElementById("Health").checked
    if health:
        save.Health()
    armor = document.getElementById("Armor").checked
    if armor:
        save.Armor()
    run = document.getElementById("Run").checked
    save.InfiniteRun(InfRun=run)
    money = document.getElementById("Money").checked
    if money:
        save.Money()
    fireproof = document.getElementById("Fireproof").checked
    save.Fireproof(Fireproof=fireproof)

    wantedlevel = int(document.getElementById("wantedlevel").value)
    if 0<= wantedlevel <=6:
        save.WantedLevel(Chaoslevel=wantedlevel)

    fat = int(document.getElementById("fat").value)
    if fat:
        save.Fat(level=fat*10) # range 0-1000
    muscle = int(document.getElementById("muscle").value)
    if muscle:
        save.Muscle(level=muscle*10)
    sexappeal = int(document.getElementById("sexappeal").value)
    if sexappeal:
        save.SexAppeal(level=sexappeal*20) # range 0-2000
    stamina = int(document.getElementById("stamina").value)
    if stamina:
        save.Stamina(level=stamina*10)

    save.savefile("GTASAsf5.b")
