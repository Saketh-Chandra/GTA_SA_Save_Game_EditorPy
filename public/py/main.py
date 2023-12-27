from js import document, console, Uint8Array, window, File, alert
# from pyscript import when
from GTA_SA_Save_Game_Editor import SaveFileInfo as _SaveFileInfo
import logging
from json import dumps
from random import randint

logging.basicConfig(
    format='[%(levelname)s] |%(asctime)s| %(message)s',
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S')


class SaveFileInfo(_SaveFileInfo):
    def processFile(self):
        # JS Global Variable
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
        output_file = File.new([Uint8Array.new(self.data)], filename, {
                               type: "application/octet-stream"})
        link = document.createElement('a')
        link.href = window.URL.createObjectURL(output_file)
        link.textContent = f"Download Save file: {filename}"
        link.download = filename
        link.click()


def get_savefile_info():
    save = SaveFileInfo(filename=None)
    sava_file_data = save.getSaveFileInfo()
    # print(sava_file_data)
    sava_file_data['Health'] = "inf" if sava_file_data['Health'] == float(
        'inf') else sava_file_data['Health']
    sava_file_data['Armor'] = "inf" if sava_file_data['Armor'] == float(
        'inf') else sava_file_data['Armor']
    # return sava_file_data
    return dumps(sava_file_data)


def main(*args, **kwargs):
    print(f"{args=}", f"{kwargs=}")
    save = SaveFileInfo(filename=None)
    # sava_file_data = save.getSaveFileInfo()
    # print(sava_file_data)

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
window.getSaveFileInfo = get_savefile_info
# createObject(create_proxy(get_savefile_info), "get_savefile_info")
