from js import document, console, Uint8Array, window, File


import struct

try:
    from src.GTA_SA_Save_Game_Editor import SaveFileInfo as _SaveFileInfo, logging
except:
    from GTA_SA_Save_Game_Editor import SaveFileInfo as _SaveFileInfo, logging


class SaveFileInfo(_SaveFileInfo):
    def processFile(self):
        from js import filedata
        logging.info("File Processing")
        return bytearray(filedata)

    def savefile(self, filename):
        self.writeChecksum()
        logging.info(f"Saving.... file:{filename}")
        output_file = File.new([Uint8Array.new(self.data)], filename, {type: "application/octet-stream"})
        link = document.createElement('a')
        link.href = window.URL.createObjectURL(output_file)
        link.textContent = f"Download {filename}"
        link.download = filename
        console.log(link)
        document.getElementById("output").appendChild(link)



def main(*args, **kwargs):
    save = SaveFileInfo(filename=None)

    save.Money(Money=2020202)
    save.ProfessionalSet(parachute=True)
    save.Fireproof()
    save.InfiniteRun()
    save.WantedLevel(Chaoslevel=0)
    save.Health()
    save.Armor()
    save.GarageVehicle(location='cjsafe', vehicle_ID=432)
    save.GarageVehicle(location='CEsafe1', vehicle_ID=415)
    save.GarageVehicle(location='beacsv', vehicle_ID=415, nNitrous=10)
    save.Fat(level=0)
    save.Muscle(level=99)
    save.Stamina(level=999)
    save.SexAppeal(level=1999)

    save.savefile("GTASAsf5.b")
