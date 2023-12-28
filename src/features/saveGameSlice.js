import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    fileName: "",
    health: 0.0,
    armor: 0.0,
    money: 0,
    wantedLevel: 0, // Not Implemented in the backend
    infiniteRun: false, // Not Implemented
    Fireproof: false,
    Fat: 0.0,
    Stamina: 0.0,
    Muscle: 0.0,
    SexAppeal: 0.0,
    roadBlocks_SF: false,
    roadBlocks_LV: false,
    weapon: {
        weaponSet: "",
        parachute: false,
        flowers: false
    },
    selectedGarages: [],
    vehicles: [
        // {
        //     id: '',
        //     fireProof: false,
        //     location: [],
        //     bulletProof: false,
        //     explosionProof: false,
        //     collisionProof: false,
        //     meleeProof: false,
        //     bassBoost: false,
        //     hydraulics: false,
        //     nNitrous: false,
        //     radioStation: 0,
        // }
    ],
}


export const saveGame = createSlice({
    name: 'saveGame',
    initialState,
    reducers: {
        setFileName: (state, action) => {
            state.fileName = action.payload
        },
        setHealth: (state, action) => {
            state.health = action.payload
        },
        setArmor: (state, action) => {
            state.armor = action.payload
        },
        setMoney: (state, action) => {
            state.money = action.payload
        },
        setInfiniteRun: (state, action) => {
            state.infiniteRun = action.payload
        },
        setWantedLevel: (state, action) => {
            state.wantedLevel = action.payload
        },
        setFireproof: (state, action) => {
            state.Fireproof = action.payload
        },
        setFat: (state, action) => {
            state.Fat = action.payload
        },
        setStamina: (state, action) => {
            state.Stamina = action.payload
        },
        setMuscle: (state, action) => {
            state.Muscle = action.payload
        },
        setSexAppeal: (state, action) => {
            state.SexAppeal = action.payload
        },
        setRoadBlocks_SF: (state, action) => {
            state.roadBlocks_SF = action.payload
        },
        setRoadBlocks_LV: (state, action) => {
            state.roadBlocks_LV = action.payload
        },
        setWeaponSet: (state, action) => {
            state.weapon.weaponSet = action.payload
        },
        setParachute: (state, action) => {
            state.weapon.parachute = action.payload
        },
        setFlowers: (state, action) => {
            state.weapon.flowers = action.payload
        },
        setSelectedGarages: (state, action) => {
            state.selectedGarages = action.payload
        },
        addVehicle(state,) {
            state.vehicles.push(
                {
                    id: '',
                    location: [],
                    fireProof: false,
                    bulletProof: false,
                    explosionProof: false,
                    collisionProof: false,
                    meleeProof: false,
                    bassBoost: false,
                    hydraulics: false,
                    nNitrous: false,
                    radioStation: 0,
                }
            )
        },
        removeVehicle(state, action) {
            state.vehicles.splice(action.payload, 1)
        },
        updateVehicle(state, action) {
            state.vehicles[action.payload.index] = action.payload.vehicles
        },
        setVehicle(state, action) {
            state.vehicles = action.payload
        },
        reset: (state) => {
            state = initialState
        },


    },
})

// Action creators are generated for each case reducer function
export const {
    setFileName,
    setHealth,
    setArmor,
    setMoney,
    setInfiniteRun,
    setWantedLevel,
    setFireproof,
    setFat,
    setStamina,
    setMuscle,
    setSexAppeal,
    setRoadBlocks_SF,
    setRoadBlocks_LV,
    setWeaponSet,
    setFlowers,
    setParachute,
    setSelectedGarages,
    addVehicle,
    removeVehicle,
    updateVehicle,
    setVehicle,
    reset
} = saveGame.actions

export default saveGame.reducer;