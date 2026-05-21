import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes.ts";
import axios from "axios";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

axios.defaults.withCredentials = true;


const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:3000/graphql', credentials: 'include', }),
    cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
        <ChakraProvider value={system}>
            <RouterProvider router={routes} />
        </ChakraProvider>
        </ApolloProvider>
    </StrictMode>,
)
