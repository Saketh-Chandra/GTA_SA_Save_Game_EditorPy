import struct
import logging
from random import randint
from .offsets import offsets
from json import dumps
logging.basicConfig(
    format='[%(levelname)s] |%(asctime)s| %(message)s',
    level=logging.ERROR,
    datefmt='%Y-%m-%d %H:%M:%S')


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

        # Block 21
        self.offsets.roadblocks_SF = self.blocks[21] + 5
        self.offsets.roadblocks_LV = self.blocks[21] + 6

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

    def ThugSet(self, parachute=False, flowers=False, ammo=999999999):
        weapon_ids = [1, 5, 22, 25, 28, 30, 35, 18, 41]
        for index, weapon_id in enumerate(weapon_ids):
            self.weapon(index, weapon_id, ammo=ammo)

        if flowers:
            self.weapon(10, 0x0E)
        if parachute:
            self.weapon(11, 0x2E)

    def NutterSet(self, parachute=False, flowers=False, ammo=999999999):
        weapon_ids = [4, 24, 26, 32, 31, 34, 37, 16, 42]
        for index, weapon_id in enumerate(weapon_ids):
            self.weapon(index, weapon_id, ammo=ammo)
        if flowers:
            self.weapon(10, 0x0E)
        if parachute:
            self.weapon(11, 0x2E)

    def ProfessionalSet(self, parachute=False, flowers=False, ammo=999999999):
        weapon_ids = [9, 23, 27, 29, 31, 34, 36, 39]
        for index, weapon_id in enumerate(weapon_ids):
            self.weapon(index, weapon_id, ammo=ammo)

        if flowers:
            self.weapon(10, 0x0E)
        if parachute:
            self.weapon(11, 0x2E)

    def Health(self, Health: float = float('inf')):
        logging.info(f"{Health=}")
        self.data[self.offsets.Health:self.offsets.Health +
                  4] = struct.pack("<f", Health)

    def Armor(self, Armor: float = float('inf')):
        logging.info(f"{Armor=}")
        self.data[self.offsets.Armor:self.offsets.Armor +
                  4] = struct.pack("<f", Armor)

    def Money(self, Money: int = 999999999):
        logging.info(f"{Money=}")
        self.data[self.offsets.Money[0]:self.offsets.Money[0] +
                  4] = struct.pack("<i", Money)
        self.data[self.offsets.Money[1]:self.offsets.Money[1] +
                  4] = struct.pack("<i", Money)

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
            self.data[self.offsets.maxChaos: self.offsets.maxChaos +
                      4] = struct.pack("<i", Chaos)
        else:
            raise Exception("Chaos level ranges from 0 to 6")

    def Fat(self, level: float = 0):
        if 0 <= level <= 1000:
            self.data[self.offsets.Fat: self.offsets.Fat +
                      4] = struct.pack("<f", level)
        else:
            raise Exception("Fat level ranges from 0 to 1000")

    def Stamina(self, level: float = 0):
        if 0 <= level <= 1000:
            self.data[self.offsets.Stamina: self.offsets.Stamina +
                      4] = struct.pack("<f", level)
        else:
            raise Exception("Stamina level ranges from 0 to 1000")

    def Muscle(self, level: float = 0):
        if 0 <= level <= 1000:
            self.data[self.offsets.Muscle: self.offsets.Muscle +
                      4] = struct.pack("<f", level)
        else:
            raise Exception("Muscle level ranges from 0 to 1000")

    def SexAppeal(self, level: float = 0):
        if 0 <= level <= 2000:
            self.data[self.offsets.Stamina: self.offsets.Stamina +
                      4] = struct.pack("<f", level)
        else:
            raise Exception("SexAppeal level ranges from 0 to 2000")

    def RoadBlocksSF(self, block=True):
        self.data[self.offsets.roadblocks_SF] = block

    def RoadBlocksLV(self, block=True):
        self.data[self.offsets.roadblocks_LV] = block

    def GarageVehicle(self, location='cjsafe', vehicle_ID=603, vehicle_mods=None, vehicle_colors=None, radio_station=3,
                      nNitrous=1, bulletproof=False, fireproof=False, explosion_proof=False,
                      collision_proof=False, melee_proof=False,
                      bass_boost=False, hydraulics=False, all_proof=False):
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
            logging.critical(
                "Check this docs for Garage Names: https://gtasa-savegame-editor.github.io/docs/#/garages")
            raise Exception(
                "Check this docs for Garage Names: https://gtasa-savegame-editor.github.io/docs/#/garages")
        self.data[addr:addr + 4] = struct.pack("<f", garage[0])
        addr += 4
        self.data[addr:addr + 4] = struct.pack("<f", garage[1])
        addr += 4
        self.data[addr:addr + 4] = struct.pack("<f", garage[2])
        addr += 8
        CarFlag = 0
        if not all_proof:
            if bulletproof:
                CarFlag += 0x01
            if fireproof:
                CarFlag += 0x02
            if explosion_proof:
                CarFlag += 0x04
            if collision_proof:
                CarFlag += 0x08
            if melee_proof:
                CarFlag += 0x10
            if bass_boost:
                CarFlag += 0x20
            if hydraulics:
                CarFlag += 0x40
            if nNitrous:
                CarFlag += 0x80
        else:
            CarFlag = 255
        self.data[addr] = CarFlag
        addr += 2

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
            vehicle_colors = [randint(0, 126), randint(
                0, 126), 0, 0]  # Generating Random Colors
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
        """
        Find the locations of all the blocks in the file
        """
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

    # Get Save file Game info (Health, Armor, Money, etc) to a dictionary
    def getSaveFileInfo(self, json=False):
        data = {
            "Health": struct.unpack("<f", self.data[self.offsets.Health:self.offsets.Health + 4])[0],
            "Armor": struct.unpack("<f", self.data[self.offsets.Armor:self.offsets.Armor + 4])[0],
            "Money": struct.unpack("<i", self.data[self.offsets.Money[0]:self.offsets.Money[0] + 4])[0],
            "InfiniteRun": self.data[self.offsets.InfiniteRun],
            "Fireproof": self.data[self.offsets.Fireproof],
            "Fat": struct.unpack("<f", self.data[self.offsets.Fat: self.offsets.Fat + 4])[0],
            "Stamina": struct.unpack("<f", self.data[self.offsets.Stamina: self.offsets.Stamina + 4])[0],
            "Muscle": struct.unpack("<f", self.data[self.offsets.Muscle: self.offsets.Muscle + 4])[0],
            "SexAppeal": struct.unpack("<f", self.data[self.offsets.SexAppeal: self.offsets.SexAppeal + 4])[0],
            "roadblocks_SF": self.data[self.offsets.roadblocks_SF],
            "roadblocks_LV": self.data[self.offsets.roadblocks_LV],
            "weapon": [
               {
                   "weapon_id": struct.unpack("<i", self.data[self.blocks[2] + 44+(28*i):self.blocks[2] + 44+(28*i)+4])[0],
                   "ammo": struct.unpack("<i", self.data[self.blocks[2] + 56+(28*i):self.blocks[2] + 60+(28*i)])[0]
               } for i in range(13)
            ],
            "vehicle": [
                {
                    "location": [
                        #    [self.blocks[3] + offset_addr + axis, self.blocks[3] + 0x27+4+ offset_addr  + axis]
                        struct.unpack(
                            "<f", self.data[self.blocks[3] + offset_addr + axis: self.blocks[3] + offset_addr + 4 + axis])[0]
                        for axis in range(0, 12, 4)
                    ],
                    "vehicle_ID": struct.unpack("<h", self.data[self.blocks[3] + 0x12 + offset_addr:self.blocks[3] + 0x12 + offset_addr + 2])[0],
                    "bulletproof": (self.data[self.blocks[3] + 0x10 + offset_addr] & 0x01) != 0,
                    "fireproof": (self.data[self.blocks[3] + 0x10 + offset_addr] & 0x02) != 0,
                    "explosion_proof": (self.data[self.blocks[3] + 0x10 + offset_addr] & 0x04) != 0,
                    "collision_proof": (self.data[self.blocks[3] + 0x10 + offset_addr] & 0x08) != 0,
                    "melee_proof": (self.data[self.blocks[3] + 0x10 + offset_addr] & 0x10) != 0,
                    "bass_boost": (self.data[self.blocks[3] + 0x10 + offset_addr] & 0x20) != 0,
                    "hydraulics": (self.data[self.blocks[3] + 0x10 + offset_addr] & 0x40) != 0,
                    "nNitrous": (self.data[self.blocks[3] + 0x10 + offset_addr] & 0x80) != 0,
                    "radio_station": self.data[self.blocks[3] + 0x10 + offset_addr],

                } for offset_addr in [0x27, 0x67, 0x2e7]

            ]


        }
        if json:
            return dumps(data, indent=4)
        return data
