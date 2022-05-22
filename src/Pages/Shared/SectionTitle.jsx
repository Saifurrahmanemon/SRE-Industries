import { Center, Text, useMantineTheme } from "@mantine/core";
import React from "react";

const SectionTitle = (props) => {
    const theme = useMantineTheme();
    return (
        <Center>
            <Text
                component="span"
                align="center"
                variant="gradient"
                gradient={{
                    from: theme.colors[theme.primaryColor][9],
                    to: theme.colors[theme.primaryColor][2],
                    deg: 45,
                }}
                weight={800}
                {...props}
            ></Text>
        </Center>
    );
};

export default SectionTitle;
