import { Group } from "@mantine/core";
import React from "react";
import { GoogleButton } from "../Components/SocialButtons";

const SocialAuth = (props) => {
    return (
        <Group grow mb="md" mt="md">
            <GoogleButton radius="xl" {...props}>
                Continue With Google
            </GoogleButton>
        </Group>
    );
};

export default SocialAuth;
