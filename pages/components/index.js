import React, { useEffect, useState } from "react";

import ComponentGrid from "@/commons/grid";
import Card from "@/commons/card";
import { Grid } from "@material-ui/core";

import useStyles from "@/commons/grid/styles";

const Component = () => {
    const classes = useStyles();

    return (
        <>
            <ComponentGrid />
            <div className={classes.root}>
                <div className="card-container">
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                            <Card />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default Component;
