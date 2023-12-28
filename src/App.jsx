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
// 10. Export Save File Component

import React from 'react'
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import Home from './page/Home'


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
    h5: {
      fontFamily: 'Impact, sans-serif',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>

  )
}

export default App
