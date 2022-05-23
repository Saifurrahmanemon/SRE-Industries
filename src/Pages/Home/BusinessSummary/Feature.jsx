import { Group, Highlight, Text, ThemeIcon } from "@mantine/core";
import { ArrowUpRight } from "tabler-icons-react";
import { useStyles } from "./Features.styles";

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

                <Highlight color="dimmed" weight={500} size="md">
                    {description}
                </Highlight>
            </div>
        </div>
    );
}
