import React, { useState } from 'react'

function General() {
    const [money, setMoney] = useState(0)
    const [health, setHealth] = useState(0)
    const [armor, setArmor] = useState(0)
    const [wantedLevel, setWantedLevel] = useState(0)
    const [roadLS_SF, setRoadLS_SF] = useState(false)
    const [roadSF_LV, setRoadSF_LV] = useState(false)


    return (
        <div>
            <h1>General</h1>
            <label htmlFor="money">Money</label>
            <input type="number" id="money" name="money" value={money} max={999999999} min={0} onChange={(e) => setMoney(e.target.value)} />
            {/* create max money */}
            <button onClick={() => setMoney(999999999)}>Max Money</button>

            <br />

            <label htmlFor="health">Health</label>
            <input type="number" id="health" name="health" value={health} onChange={(e) => setHealth(e.target.value)} />
            {/* create max health */}
            <button onClick={() => setHealth(999999999)}>Max Health</button>

            <br />


            <label htmlFor="armor">Armor</label>
            <input type="number" id="armor" name="armor" value={armor} onChange={(e) => setArmor(e.target.value)} />
            {/* create max armor */}
            <button onClick={() => setArmor(999999999)}>Max Armor</button>

            <br />


            <label htmlFor="wantedLevel">Wanted Level</label>
            <input type="number" id="wantedLevel" name="wantedLevel" value={wantedLevel} max={6} min={0} onChange={(e) => setWantedLevel(e.target.value)} />
            {/* create max wanted level */}
            <button onClick={() => setWantedLevel(6)}>Max Wanted Level</button>
            <button onClick={() => setWantedLevel(0)}>Clear Wanted Level</button>

            <br />

            <label htmlFor="roadLS_SF">UnBlock/Block Roads between Los Santos and San Fierro</label>
            <input type="checkbox" id="roadLS_SF" name="roadLS_SF" value={roadLS_SF} onChange={(e) => setRoadLS_SF(e.target.checked)} />
            <br />
            <label htmlFor="roadSF_LV">UnBlock/Block Roads between San Fierro and Las Venturas</label>
            <input type="checkbox" id="roadSF_LV" name="roadSF_LV" value={roadSF_LV} onChange={(e) => setRoadSF_LV(e.target.checked)} />

        </div>
    )
}

export default General