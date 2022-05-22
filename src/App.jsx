import { MantineProvider } from "@mantine/core";
import React from "react";
import { Navbar } from "./Pages";
import Router from "./routes";
import { theme } from "./Theme/theme";
function App() {
    return (
        <>
            <MantineProvider theme={theme}>
                <Navbar />
                <Router />
            </MantineProvider>
        </>
    );
}

export default App;
