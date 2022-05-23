import { Group, Highlight, Text, ThemeIcon } from "@mantine/core";
import { ArrowUpRight } from "tabler-icons-react";
import { useStyles } from "./Features.styles";
const highlight = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export default function Feature({
    icon: Icon,
    title,
    description,
    className,
    ...others
}) {
    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.feature, className)} {...others}>
            <div className={classes.overlay} />

            <div className={classes.content}>
                <Icon size={38} className={classes.icon} />
                <Group noWrap>
                    <Text
                        weight={700}
                        size="lg"
                        mb="xs"
                        mt={5}
                        className={classes.title}
                    >
                        {title}
                    </Text>
                    <ThemeIcon
                        color="gray"
                        variant="light"
                        className={classes.icon}
                        size={30}
                        radius="md"
                        mb="sm"
                    >
                        <ArrowUpRight size={28} />
                    </ThemeIcon>
                </Group>

                <Highlight
                    highlight={highlight}
                    color="dimmed"
                    weight={500}
                    size="md"
                    mt="sm"
                    highlightStyles={(theme) => ({
                        backgroundImage: theme.fn.linearGradient(
                            45,
                            theme.colors[theme.primaryColor][3],
                            theme.colors[theme.primaryColor][9]
                        ),
                        fontWeight: 700,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    })}
                >
                    {description}
                </Highlight>
            </div>
        </div>
    );
}
