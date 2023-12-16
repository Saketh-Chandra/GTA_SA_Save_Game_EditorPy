import React, { useState } from 'react'


function Weapon() {
    const [weaponType, setWeaponType] = useState('')
    const [parachute, setParachute] = useState(false) 
    const [flowers, setFlowers] = useState(false)
    const weaponSet = [
        'Infinite Thug Weapon Set',
        'Infinite Nutter Weapon Set',
        'Infinite Professional Weapon Set'
    ]
    return (
        <div>
            <h1>Weapon</h1>
            <label htmlFor="weaponType">Weapon Type</label>
            <select name="weaponType" id="weaponType" value={weaponType} onChange={(e) => setWeaponType(e.target.value)}>
                <option value="">Select Weapon Type</option>
                {weaponSet.map((weapon, index) => {
                    return <option key={index} value={weapon}>{weapon}</option>
                })}
            </select>
            <br />
            <label htmlFor="parachute">Parachute</label>
            <input type="checkbox" id="parachute" name="parachute" value={parachute} onChange={(e) => setParachute(e.target.checked)} />
            <br />
            <label htmlFor="flowers">Flowers</label>
            <input type="checkbox" id="flowers" name="flowers" value={flowers} onChange={(e) => setFlowers(e.target.checked)} />
        </div>
    )
}

export default Weapon
