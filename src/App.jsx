import { MantineProvider } from "@mantine/core";
import React from "react";
import { Navbar } from "./Pages";
import Router from "./routes";
function App() {
    return (
        <>
            <MantineProvider>
                <Navbar />
                <Router />
            </MantineProvider>
        </>
    );
}

export default App;
