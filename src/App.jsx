// Componen for GTA SA save file editor:
// 1. Save File Upload Component
// 2. General (Money, Health, Armor, Wanted Level, Time, Weather, etc.)
// 3. Body (Fat, Muscle, Sex Appeal, Stamina, Lung Capacity)
// 4. Weapon (Weapon, Ammo, Weapon Skill)
// 5. Garage (Garage, Vehicle Component)
// 6. Vehicle (Vehicle, Vehicle Color, Vehicle Mod, Vehicle Paint job, Vehicle Component)
// 7. Stats (Mission Attempts, Mission Passed, Total Mission, Total Playing Time, Distance Traveled, Favorite Radio Station, Criminal Rating) [Future Release]
// 8. Gang (Gang, Gang Territory) [Future Release]
// 9. Clothes (Clothes, Tattoo, Haircut)[Future Release]

import React from 'react'
import Home from './page/Home'
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css'

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#388E3C',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      fontFamily: 'Impact, sans-serif', // Use Impact font for heading 4
    },
  },
});


const gtaTheme = createTheme({
  palette: {
    primary: {
      main: '#ff6600', // Orange
    },
    secondary: {
      main: '#007bff', // Blue
    },
    background: {
      default: '#000000', // Black
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#ff6600', // Orange
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      fontFamily: 'Impact, sans-serif', // Use Impact font for heading 4
    },
  },
});






function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Home />
      </ThemeProvider>
    </Router>

  )
}

export default App
