import { Grid, Box, makeStyles } from '@material-ui/core';
import React from 'react'
import SentenceSkeleton from '../../components/common/SentenceSkeleton';

const useStyles = makeStyles(() => ({
    skeletonMargin: {
        margin: '8px 0px'
    },
    container: { marginTop: '24px' },
    titleSkeleton: { marginBottom: '16px' }
}));

const RestaurantDetailsSkeleton = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.container}>
            <Grid item md={6}>
                <Box className={classes.titleSkeleton}>
                    <SentenceSkeleton height="24px" width="30%" />
                </Box>
                <Box className={classes.skeletonMargin}>
                    <SentenceSkeleton height="14px" />
                </Box>
                <Box className={classes.skeletonMargin}>
                    <SentenceSkeleton height="14px" />
                </Box>
                <Box className={classes.skeletonMargin}>
                    <SentenceSkeleton height="14px" />
                </Box>
                <Box className={classes.skeletonMargin}>
                    <SentenceSkeleton height="14px" />
                </Box>
                <Box style={{ marginTop: '24px'}}>
                    <Box className={classes.skeletonMargin}>
                        <SentenceSkeleton height="14px" width="80%" />
                    </Box>
                    <Box className={classes.skeletonMargin}>
                        <SentenceSkeleton height="14px" width="50%" />
                    </Box>
                    <Box className={classes.skeletonMargin}>
                        <SentenceSkeleton height="14px" width="30%" />
                    </Box>
                </Box>
            </Grid>
            <Grid item md={6}>
                <SentenceSkeleton height="300px" />
            </Grid>
        </Grid>
    )
}

export default RestaurantDetailsSkeleton;
