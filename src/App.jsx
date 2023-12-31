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

import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import { Container } from '@mui/material';



const General = lazy(() => import('./components/General'));
const Body = lazy(() => import('./components/Body'));
const Garage = lazy(() => import('./components/Garage'));
const SaveFileDownload = lazy(() => import('./components/SaveFileDownload'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));


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


const pages = [
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}><General /></Suspense>,

  },
  {
    path: "/body",
    element: <Suspense fallback={<div>Loading...</div>}><Body /></Suspense>,
  },
  {
    path: "/garage",
    element: <Suspense fallback={<div>Loading...</div>}><Garage /></Suspense>,
  },
  {
    path: "/savefiledownload",
    element: <Suspense fallback={<div>Loading...</div>}><SaveFileDownload /></Suspense>,
  },
  {
    path: "*",
    element: <Suspense fallback={<div>Loading...</div>}><PageNotFound /></Suspense>,
  }
]

const router = createBrowserRouter(pages);

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container style={{ marginTop: "2.5vh" }}>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </Provider>

  )
}

export default App
