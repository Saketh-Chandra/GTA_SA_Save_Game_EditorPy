import React, { lazy, Suspense } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';

// const General = lazy(() => import('./components/General'));
const General = lazy(() => import('./page/GeneralPage'));
const Body = lazy(() => import('./page/BodyPage'));
const Garage = lazy(() => import('./page/GaragePage'));
const SaveFileDownload = lazy(() => import('./page/SaveFileDownloadPage'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

const pages = [
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/",
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <General />
                    </Suspense>

            },
            {
                path: "/body",
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <Body />
                    </Suspense>
            },
            {
                path: "/garage",
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <Garage />
                    </Suspense>
            },
            {
                path: "/savefiledownload",
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <SaveFileDownload />
                    </Suspense>
            },
            {
                path: "*",
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <PageNotFound />
                    </Suspense>
            }
        ]
    }
]


function AppRoutes() {
    const router = createBrowserRouter(pages);
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes