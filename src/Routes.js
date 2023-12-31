import React from 'react';
import { Routes, Route } from 'react-router-dom';

const General = lazy(() => import('./components/General'));
const Body = lazy(() => import('./components/Body'));
const Garage = lazy(() => import('./components/Garage'));
const SaveFileDownload = lazy(() => import('./components/SaveFileDownload'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));



function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <General />
                </Suspense>
            } />
            <Route path="/body" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Body />
                </Suspense>
            } />
            <Route path="/garage" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Garage />
                </Suspense>
            } />
            <Route path="/savefiledownload" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <SaveFileDownload />
                </Suspense>
            } />
            <Route path="*" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <PageNotFound />
                </Suspense>
            } />
        </Routes>

    )
}

export default AppRoutes