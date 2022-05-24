import { Badge } from "@mantine/core";
import React from "react";

const CustomBadge = (props) => {
    return (
        <>
            <Badge color="gray" size="lg" weight={900} {...props}></Badge>
        </>
    );
};

export default CustomBadge;
