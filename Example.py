from GTA_SA_Save_Game_Editor import SaveFileInfo


save = SaveFileInfo(filename="./Save_Files/GTASAsf5.b")
save.Money(Money=101010122)
save.ProfessionalSet(parachute=True, flowers=True)
save.Fireproof()
save.InfiniteRun()
save.WantedLevel(Chaoslevel=0)
save.Health()
save.Armor()
save.GarageVehicle(location='cjsafe', vehicle_ID=502,
                   nNitrous=10, all_proof=True, radio_station=0)
save.GarageVehicle(location='CEsafe1', vehicle_ID=415, all_proof=True, radio_station=1)
save.GarageVehicle(location='beacsv', vehicle_ID=415,
                   nNitrous=10, bulletproof=False, radio_station=5)
save.Fat(level=0)
save.Muscle(level=999)
save.Stamina(level=999)
save.SexAppeal(level=1999)
save.RoadBlocksSF(False)
save.RoadBlocksLV(False)
save.savefile(filename="./Save_Files/GTASAsf4.b")
print(save.getSaveFileInfo(json=True))
