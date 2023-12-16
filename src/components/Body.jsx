import React, { useState } from 'react'

function Body() {
    const [fat, setFat] = useState(0)
    const [muscle, setMuscle] = useState(0)
    const [sexAppeal, setSexAppeal] = useState(0)
    const [stamina, setStamina] = useState(0)
    // const [lungCapacity, setLungCapacity] = useState(0)
    const [fireproof, setFireproof] = useState(false)

    return (
        <div>
            <h1>Body</h1>
            <label htmlFor="fat">Fat</label>
            {/* input range fat*/}
            <input type="range" id="fat" name="fat" value={fat} max={1000} min={0} onChange={(e) => setFat(e.target.value)} />

            <br />
            <label htmlFor="muscle">Muscle</label>
            {/* input range muscle*/}
            <input type="range" id="muscle" name="muscle" value={muscle} max={1000} min={0} onChange={(e) => setMuscle(e.target.value)} />
            <br />

            <label htmlFor="Sex Appeal">Sex Appeal</label>
            {/* input range sexAppeal*/}
            <input type="range" id="sexAppeal" name="sexAppeal" value={sexAppeal} max={2000} min={0} onChange={(e) => setSexAppeal(e.target.value)} />
            <br />
            <label htmlFor="stamina">Stamina</label>
            {/* input range stamina*/}
            <input type="range" id="stamina" name="stamina" value={stamina} max={1000} min={0} onChange={(e) => setStamina(e.target.value)} />
            <br />
            {/* <label htmlFor="lungCapacity">Lung Capacity</label> */}
            {/* input range lungCapacity*/}
            {/* <input type="range" id="lungCapacity" name="lungCapacity" value={lungCapacity} max={1000} min={0} onChange={(e) => setLungCapacity(e.target.value)} /> */}
            {/* <br /> */}
            <label htmlFor="fireproof">Fireproof</label>
            <input type="checkbox" id="fireproof" name="fireproof" value={fireproof} onChange={(e) => setFireproof(e.target.checked)} />

        </div>
    )
}

export default Body