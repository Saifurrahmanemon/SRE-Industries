import { Button } from "@mantine/core";
import React from "react";
import { FacebookIcon } from "../../Assets/Icons/FacebookIcon";
import githubIcon from "../../Assets/Icons/github.png";
import { GoogleIcon } from "../../Assets/Icons/GoogleIcon";

export function GoogleButton(props) {
    return (
        <Button
            leftIcon={<GoogleIcon />}
            variant="default"
            color="gray"
            {...props}
        />
    );
}
// not using kept for future use
export function FacebookButton(props) {
    return (
        <Button
            leftIcon={<FacebookIcon />}
            sx={(theme) => ({
                backgroundColor: "#4267B2",
                color: "#fff",
                "&:hover": {
                    backgroundColor: theme.fn.darken("#4267B2", 0.1),
                },
            })}
            {...props}
        />
    );
}
// not using kept for future use
export function GithubButton(props) {
    return (
        <Button
            {...props}
            leftIcon={<img src={githubIcon} alt="github" />}
            sx={(theme) => ({
                backgroundColor:
                    theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
                color: "#fff",
                "&:hover": {
                    backgroundColor:
                        theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
                },
            })}
        />
    );
}
