import { createStyles, Highlight } from "@mantine/core";
import React from "react";
const useStyles = createStyles((theme) => ({
    highlight: {
        fontWeight: 900,
        fontSize: 23,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));
const HighlightName = (props) => {
    const { classes } = useStyles();
    return (
        <>
            <Highlight
                align="center"
                className={classes.highlight}
                highlight={"SRE Industries"}
                highlightStyles={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    backgroundImage: theme.fn.linearGradient(
                        45,
                        theme.colors[theme.primaryColor][3],
                        theme.colors[theme.primaryColor][9]
                    ),
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                })}
                {...props}
            ></Highlight>
        </>
    );
};

export default HighlightName;
