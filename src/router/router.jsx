import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Certifications from "../pages/Certifications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/skills',
                element: <Skills/>
            },
            {
                path: '/certifications',
                element: <Certifications/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        

        ]
    }
])

export default router