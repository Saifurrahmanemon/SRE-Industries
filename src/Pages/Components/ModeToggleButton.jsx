import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

export default function ModeToggleButton(props) {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    return (
        <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            {...props}
        >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
    );
}
