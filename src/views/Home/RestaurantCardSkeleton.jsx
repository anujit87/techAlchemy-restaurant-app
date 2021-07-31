import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import SentenceSkeleton from '../../components/common/SentenceSkeleton';

const useStyles = makeStyles(() => ({
    margin: {
        margin: '8px 0px'
    }
}));

const RestaurantCardSkeleton = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.margin}>
                <SentenceSkeleton height="176px" />
            </Box>
            <Grid container>
                <Grid item md={7}>
                    <SentenceSkeleton height="24px" />
                </Grid>
                <Grid item md={2} />
                <Grid item md={3}>
                    <SentenceSkeleton height="24px" />
                </Grid>
            </Grid>
            <Box className={classes.margin}>
                <SentenceSkeleton height="14px" />
            </Box>
            <Box className={classes.margin}>
                <SentenceSkeleton height="14px" />
            </Box>
            <SentenceSkeleton height="14px" />
        </Box>
    )
}

export default RestaurantCardSkeleton
