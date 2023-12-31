from js import document, console, Uint8Array, window, File, alert
# from pyscript import when
from GTA_SA_Save_Game_Editor import SaveFileInfo as _SaveFileInfo
import logging
from json import dumps, loads
from random import randint

# logging.basicConfig(
#     format='[%(levelname)s] |%(asctime)s| %(message)s',
#     level=logging.INFO,
#     datefmt='%Y-%m-%d %H:%M:%S')


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
    save_game_data = loads(args[0])
    print(f"{save_game_data=}")
    save = SaveFileInfo(filename=None)

    if save_game_data['health'] == '999999999':
        save.Health(Health=float('inf'))
    else:
        save.Health(Health=save_game_data['health'])

    if save_game_data['armor'] == '999999999':
        save.Armor(Armor=float('inf'))
    else:
        save.Armor(Armor=save_game_data['armor'])

    save.Money(Money=save_game_data['money'])
    save.WantedLevel(Chaoslevel=save_game_data['wantedLevel'])
    save.InfiniteRun(InfRun=save_game_data['infiniteRun'])
    save.Fireproof(Fireproof=save_game_data['Fireproof'])
    save.Fat(level=save_game_data['Fat'])
    save.Muscle(level=save_game_data['Muscle'])
    save.Stamina(level=save_game_data['Stamina'])
    save.SexAppeal(level=save_game_data['SexAppeal'])
    save.RoadBlocksSF(block=save_game_data['roadBlocks_SF'])
    save.RoadBlocksLV(block=save_game_data['roadBlocks_LV'])

    if save_game_data['weapon']['weaponSet'] == 'Infinite Thug Weapon Set':
        save.ThugSet(
            parachute=save_game_data['weapon']['parachute'],
            flowers=save_game_data['weapon']['flowers']
        )
    elif save_game_data['weapon']['weaponSet'] == 'Infinite Nutter Weapon Set':
        save.NutterSet(
            parachute=save_game_data['weapon']['parachute'],
            flowers=save_game_data['weapon']['flowers']
        )
    elif save_game_data['weapon']['weaponSet'] == 'Infinite Professional Weapon Set':
        save.ProfessionalSet(
            parachute=save_game_data['weapon']['parachute'],
            flowers=save_game_data['weapon']['flowers']
        )
    else:
        logging.info("No Weapon Set Selected")

    for vehicle in save_game_data['vehicles']:
        save.GarageVehicle(
            location=vehicle["location"], vehicle_ID=int(vehicle["id"]),
            radio_station=vehicle["radioStation"], nNitrous=vehicle["nNitrous"],
            bulletproof=vehicle["bulletProof"], fireproof=vehicle["fireProof"],
            explosion_proof=vehicle["explosionProof"], collision_proof=vehicle["collisionProof"],
            melee_proof=vehicle["meleeProof"], bass_boost=vehicle["bassBoost"], hydraulics=vehicle["hydraulics"]
        )
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
    print(save.getSaveFileInfo(json=True))
    num = randint(1, 5)
    save.savefile(f"GTASAsf{num}.b")


window.main = main
window.getSaveFileInfo = get_savefile_info
# createObject(create_proxy(get_savefile_info), "get_savefile_info")
