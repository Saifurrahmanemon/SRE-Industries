import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import React, { useState } from "react";
import { Footer, Navbar } from "./Pages";
import Router from "./routes";
function App() {
    // for changing theme
    const [colorScheme, setColorScheme] = useState("light");
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{
                    colorScheme,
                    colors: {
                        brand: [
                            "#e1e6ff",
                            "#b2b9ff",
                            "#808eff",
                            "#4f67fe",
                            "#2143fd",
                            "#0d32e4",
                            "#052cb2",
                            "#002380",
                            "#00104f",
                            "#00031f",
                        ],
                    },
                    primaryColor: "brand",
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Navbar />
                <Router />
                <Footer />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
