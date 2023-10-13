import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from './Components/Home';
import Projects from './Components/Projects';
import Blogs from './Components/Blogs';
import About from './Components/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/blogs",
        element: <Blogs />
    },
    {
        path: "/about",
        element: <About />
    }
]);

export default router;

