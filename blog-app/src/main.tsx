import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes.ts";
import axios from "axios";

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider value={system}>
            <RouterProvider router={routes} />
        </ChakraProvider>
    </StrictMode>,
)
