import React, { useState } from 'react'
import Vehicle from './Vehicle'
const garageList = ['Ganton garage (Grove St.)', 'Santa Maria Beach garage', 'Muholland garage'];
const allVehicles = {
    "4": "Car",
    "2": "Bike",
    
};

function Garage() {
    const [selectedGarages, setSelectedGarages] = useState([]);
    const [vehicles, setVehicles] = useState({});

    const updateVehicle = (garage, vehicleData) => {
        setVehicles((prevVehicles) => ({
            ...prevVehicles,
            [garage]: vehicleData
        }))
    }



    return (
        <div>
            <h2>Garage Component</h2>
            <div>
                <label>Select Garages:</label>
                <select multiple onChange={(e) => setSelectedGarages(Array.from(e.target.selectedOptions).map((opt) => opt.value))}>
                    {garageList.map((garage) => (
                        <option key={garage} value={garage}>
                            {garage}
                        </option>
                    ))}
                </select>
            </div>

            {selectedGarages.map((garage) => (
                <div key={garage}>
                    <h3>{garage}</h3>
                    <Vehicle
                        vehicles={allVehicles}
                        garage={garage}
                        vehicleData={vehicles[garage] || {
                            "name": "",
                            "fireProof": false,
                            "bulletProof": false,
                        }}
                        updateVehicle={updateVehicle}

                    />

                </div>
            ))}
        </div>
    );
}



export default Garage