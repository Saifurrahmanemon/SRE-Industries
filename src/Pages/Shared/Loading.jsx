import { Center, Loader } from "@mantine/core";
import React from "react";

const Loading = (props) => {
    return (
        <Center>
            <Loader variant="dots" {...props} />
        </Center>
    );
};

export default Loading;
