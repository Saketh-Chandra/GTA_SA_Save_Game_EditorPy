// Componen for GTA SA save file editor:
// 1. Save File Upload Component
// 2. General (Money, Health, Armor, Wanted Level, Time, Weather, etc.)
// 3. Body (Fat, Muscle, Sex Appeal, Stamina, Lung Capacity)
// 4. Weapon (Weapon, Ammo, Weapon Skill)
// 5. Garage (Garage, Vehicle Component)
// 6. Vehicle (Vehicle, Vehicle Color, Vehicle Mod, Vehicle Paintjob, Vehicle Component)
// 7. Stats (Mission Attempts, Mission Passed, Total Mission, Total Playing Time, Distance Travelled, Favorite Radio Station, Criminal Rating) [Future Release]
// 8. Gang (Gang, Gang Territory) [Future Release]
// 9. Clothes (Clothes, Tattoo, Haircut)[Future Release]


import ReadFile from './components/ReadFile'
import General from './components/General'
import Body from './components/Body'
import Weapon from './components/Weapon'
import Garage from './components/Garage'



function App() {

  return (
    <>
      <ReadFile />
      <General />
      <Body />
      <Weapon />
      <Garage />
      <button onClick={() => { window.main() }}>Click Generate File</button> 
    </>
  )
}

export default App
