from js import document, console, Uint8Array, window, File, alert
from pyscript import when
from GTA_SA_Save_Game_Editor import SaveFileInfo as _SaveFileInfo, logging
from random import randint


class SaveFileInfo(_SaveFileInfo):
    def processFile(self):
        filedata = window.filedata
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
        li = document.createElement('li')
        li.appendChild(link)
        document.getElementById("linkList").appendChild(li)



def main(*args, **kwargs):
    print(f"{args=}", f"{kwargs=}")
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
    # Generate a random number between 1 and 5
    num = randint(1, 5)
    save.savefile(f"GTASAsf{num}.b")

window.main = main
