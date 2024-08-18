import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import Layout from "./layouts/Layout.tsx";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../src/layouts/theme.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Layout>
    <RouterProvider router={router}></RouterProvider>
    </Layout>
    </ChakraProvider>
  
   
  </React.StrictMode>
);
