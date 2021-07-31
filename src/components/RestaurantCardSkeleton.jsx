import { Box, Grid } from '@material-ui/core';
import React from 'react'
import SentenceSkeleton from './SentenceSkeleton';

const RestaurantCardSkeleton = () => {
    return (
        <Box>
            <Box style={{ margin: '8px 0px' }}>
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
            <Box style={{ margin: '8px 0px' }}>
                <SentenceSkeleton height="14px" />
            </Box>
            <Box style={{ margin: '8px 0px' }}>
                <SentenceSkeleton height="14px" />
            </Box>
            <SentenceSkeleton height="14px" />
        </Box>
    )
}

export default RestaurantCardSkeleton
