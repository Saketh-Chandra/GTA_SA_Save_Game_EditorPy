import React from 'react';

function Vehicle({ vehicles, garage, vehicleData, updateVehicle }) {
    const handleVehicleChange = (e) => {
        console.log(e.target);
        let { name, value, checked } = e.target;
        if (name !== 'name') {
            value = checked;
        }
        console.log(name, value);
        updateVehicle(garage, {
            ...vehicleData,
            [name]: value
        })
    }

    return (
        <div>
            <label>Select Vehicle:</label>
            <select name='name' value={vehicleData.name} onChange={handleVehicleChange}>
                <option value="">Select a Vehicle</option>
                {Object.entries(vehicles).map(([id, name]) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
            <label>
                Fire Proof:
                <input name='fireProof' type="checkbox" defaultChecked={false} onClick={handleVehicleChange} />
            </label>
            <label>
                Bullet Proof:
                <input name='bulletProof' type="checkbox" defaultChecked={false} onClick={handleVehicleChange} />
            </label>
        </div>
    );
}

export default Vehicle;
