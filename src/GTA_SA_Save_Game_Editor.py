import struct
import logging
from random import randint

logging.basicConfig(
    format='[%(levelname)s] |%(asctime)s| %(message)s',
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S')


class offsets:
    def __init__(self):
        self.Money = []
        self.InfiniteRun = None
        self.Fireproof = None
        self.Health = None
        self.Armor = None
        self.maxChaos = None
        self.Fat = None
        self.Stamina = None
        self.Muscle = None
        self.SexAppeal = None


class SaveFileInfo:
    def __init__(self, filename):
        self.filename = filename
        self.data = self.processFile()
        self.name = None
        self.blocks = []
        self.offsets = offsets()
        self.BlockLocations()
        self.CheatLocations()

    def CheatLocations(self):
        # Block 0
        self.offsets.maxChaos = self.blocks[0] + 0x14C

        # Block 2
        self.offsets.Health = self.blocks[2] + 0x24
        self.offsets.Armor = self.blocks[2] + 0x28

        # Block 15
        self.offsets.Money = [self.blocks[15] + 0x04, self.blocks[15] + 0x10]
        self.offsets.InfiniteRun = self.blocks[15] + 0x20
        self.offsets.Fireproof = self.blocks[15] + 0x22

        # Block 16
        self.offsets.Fat = self.blocks[16] + 0x54
        self.offsets.Stamina = self.blocks[16] + 0x58
        self.offsets.Muscle = self.blocks[16] + 0x5C
        self.offsets.SexAppeal = self.blocks[16] + 0x140

    def weapon(self, weapon_number, weapon_id, ammo=999999999):
        address = self.blocks[2]
        if weapon_number == 0:
            address += 56
        elif weapon_number == 1:
            address += 84
        elif weapon_number == 2:
            address += 112
        elif weapon_number == 3:
            address += 140
        elif weapon_number == 4:
            address += 168
        elif weapon_number == 5:
            address += 196
        elif weapon_number == 6:
            address += 224
        elif weapon_number == 7:
            address += 252
        elif weapon_number == 8:
            address += 280
        elif weapon_number == 9:
            address += 308
        elif weapon_number == 10:
            address += 336
        elif weapon_number == 11:
            address += 364
        elif weapon_number == 12:
            address += 392

        address -= 12
        self.data[address:address + 4] = struct.pack("<i", weapon_id)
        address += 12
        self.data[address:address + 4] = struct.pack("<i", ammo)

    def ThugSet(self, parachute=False):
        self.weapon(0, 1)
        self.weapon(1, 5)
        self.weapon(2, 22)
        self.weapon(3, 25)
        self.weapon(4, 28)
        self.weapon(5, 30)
        self.weapon(7, 35)
        self.weapon(8, 18)
        self.weapon(9, 41)
        if parachute:
            self.weapon(11, 0x2E)

    def NutterSet(self, parachute=False):
        self.weapon(1, 4)
        self.weapon(2, 24)
        self.weapon(3, 26)
        self.weapon(4, 32)
        self.weapon(5, 31)
        self.weapon(6, 34)
        self.weapon(7, 37)
        self.weapon(8, 16)
        self.weapon(9, 42)
        if parachute:
            self.weapon(11, 0x2E)

    def ProfessionalSet(self, parachute=False):
        self.weapon(1, 9)
        self.weapon(2, 23)
        self.weapon(3, 27)
        self.weapon(4, 29)
        self.weapon(5, 31)
        self.weapon(6, 34)
        self.weapon(7, 36)
        self.weapon(8, 39)
        if parachute:
            self.weapon(11, 0x2E)

    def Health(self, Health: float = float('inf')):
        logging.info(f"{Health=}")
        self.data[self.offsets.Health:self.offsets.Health + 4] = struct.pack("<f", Health)

    def Armor(self, Armor: float = float('inf')):
        logging.info(f"{Armor=}")
        self.data[self.offsets.Armor:self.offsets.Armor + 4] = struct.pack("<f", Armor)

    def Money(self, Money: int = 999999999):
        logging.info(f"{Money=}")
        self.data[self.offsets.Money[0]:self.offsets.Money[0] + 4] = struct.pack("<i", Money)
        self.data[self.offsets.Money[1]:self.offsets.Money[1] + 4] = struct.pack("<i", Money)

    def InfiniteRun(self, InfRun: bool = True):
        logging.info(f"{InfRun=}")
        self.data[self.offsets.InfiniteRun] = InfRun

    def Fireproof(self, Fireproof=True):
        logging.info(f"{Fireproof=}")
        self.data[self.offsets.Fireproof] = Fireproof

    def WantedLevel(self, Chaoslevel: int = 0):
        if 0 <= Chaoslevel <= 6:
            Chaos = Chaoslevel * 1000
            logging.info(f"{Chaos=}")
            self.data[self.offsets.maxChaos: self.offsets.maxChaos + 4] = struct.pack("<i", Chaos)
        else:
            raise Exception("Chaos level ranges from 0 to 6")

    def Fat(self, level: float = 0):
        if 0 <= level <= 1000:
            self.data[self.offsets.Fat: self.offsets.Fat + 4] = struct.pack("<f", level)
        else:
            raise Exception("Fat level ranges from 0 to 1000")

    def Stamina(self, level: float = 0):
        if 0 <= level <= 1000:
            self.data[self.offsets.Stamina: self.offsets.Stamina + 4] = struct.pack("<f", level)
        else:
            raise Exception("Stamina level ranges from 0 to 1000")

    def Muscle(self, level: float = 0):
        if 0 <= level <= 1000:
            self.data[self.offsets.Muscle: self.offsets.Muscle + 4] = struct.pack("<f", level)
        else:
            raise Exception("Muscle level ranges from 0 to 1000")

    def SexAppeal(self, level: float = 0):
        if 0 <= level <= 2000:
            self.data[self.offsets.Stamina: self.offsets.Stamina + 4] = struct.pack("<f", level)
        else:
            raise Exception("SexAppeal level ranges from 0 to 2000")

    def GarageVehicle(self, location='cjsafe', vehicle_ID=603, vehicle_mods=None, vehicle_colors=None, radio_station=3,
                      nNitrous=1):
        if location == 'cjsafe':
            garage = (2505.847, -1695.321, 13.27919)
            vec_rotation = [252, 99, 0]
            addr = self.blocks[3] + 0x27
        elif location == 'beacsv':
            garage = (322.7532, -1764.683, 4.300942)
            vec_rotation = [251, 157, 2]
            addr = self.blocks[3] + 0x67
        elif location == 'CEsafe1':
            garage = (1354.678, -631.5799, 108.8764)
            vec_rotation = [231, 96, 0]
            addr = self.blocks[3] + 0x2e7
        else:
            logging.critical("Check this docs for Garage Names: https://gtasa-savegame-editor.github.io/docs/#/garages")
            raise Exception("Check this docs for Garage Names: https://gtasa-savegame-editor.github.io/docs/#/garages")
        self.data[addr:addr + 4] = struct.pack("<f", garage[0])
        addr += 4
        self.data[addr:addr + 4] = struct.pack("<f", garage[1])
        addr += 4
        self.data[addr:addr + 4] = struct.pack("<f", garage[2])
        addr += 10
        self.data[addr:addr + 2] = struct.pack("<h", vehicle_ID)
        if not vehicle_mods:
            vehicle_mods = [0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff,
                            0xffff,
                            0xffff,
                            0xffff, 0xffff]  # 0xffff Don't apply any vehicle mods
        for i in vehicle_mods:
            addr += 2
            self.data[addr:addr + 2] = struct.pack("<H", i)
        if not vehicle_colors:
            vehicle_colors = [randint(0, 126), randint(0, 126), 0, 0]  # Generating Random Colors
        addr += 1
        for i in vehicle_colors:
            addr += 1
            self.data[addr] = i
        addr += 1
        self.data[addr] = radio_station
        addr += 1
        self.data[addr] = 0  # vehicleVariation[0]
        addr += 1
        self.data[addr] = 0xff  # vehicleVariation[1]

        addr += 1
        self.data[addr] = 0  # No Bomb

        addr += 1
        self.data[addr] = 0xff  # PaintJob

        addr += 1
        self.data[addr] = nNitrous  # nNitrous
        for i in vec_rotation:
            addr += 1
            self.data[addr] = i
        addr += 1
        self.data[addr] = 0x00  # align

    def BlockLocations(self):
        for i in range(len(self.data) - 4):
            try:
                if self.data[i:i + 1].decode("utf-8") == 'B':
                    if (self.data[i:i + 5]).decode("utf-8") == "BLOCK":
                        self.blocks.append(i + 5)
            except:
                pass

    def processFile(self):
        logging.info("File Processing")
        with open(self.filename, "rb") as data:
            return bytearray(data.read())

    def calculateSum(self):
        logging.info("Calculate Sum")
        return sum(self.data[:-4])

    def writeChecksum(self):
        logging.info("Write Check sum")
        self.data[-4:] = struct.pack("<I", self.calculateSum())

    def savefile(self, filename):
        self.writeChecksum()
        logging.info(f"Saving.... file:{filename}")
        with open(filename, "wb") as out:
            out.write(self.data)


if __name__ == '__main__':
    save = SaveFileInfo(filename="Save_Files/GTASAsf6.b")
    save.Money(Money=1010101)
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
    save.savefile(filename="Save_Files/GTASAsf5.b")

