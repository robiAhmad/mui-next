import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

const SkeletonComponent = ({ key }) => {
    return (
        <Box width={210} marginRight={0.5} my={5} key={key}>
            <Skeleton variant="rect" width={210} height={118} />
            <Box pr={2}>
                <Skeleton width="50%" />
                <Skeleton width="100%" />
                <Skeleton width="100%" />
                <Skeleton width="100%" />
            </Box>
        </Box>
    );
};

export default SkeletonComponent;
