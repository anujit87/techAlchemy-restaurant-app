import { Grid, Box } from '@material-ui/core';
import React from 'react'
import SentenceSkeleton from './SentenceSkeleton';

const RestaurantDetailsSkeleton = () => {
    return (
        <Grid container spacing={2} style={{ marginTop: '24px' }}>
            <Grid item md={6}>
                <Box style={{ marginBottom: '16px' }}>
                    <SentenceSkeleton height="24px" width="30%" />
                </Box>
                <Box style={{ margin: '8px 0px' }}>
                    <SentenceSkeleton height="14px" />
                </Box>
                <Box style={{ margin: '8px 0px' }}>
                    <SentenceSkeleton height="14px" />
                </Box>
                <Box style={{ margin: '8px 0px' }}>
                    <SentenceSkeleton height="14px" />
                </Box>
                <Box style={{ margin: '8px 0px' }}>
                    <SentenceSkeleton height="14px" />
                </Box>
                <Box style={{ marginTop: '24px'}}>
                    <Box style={{ margin: '8px 0px' }}>
                        <SentenceSkeleton height="14px" width="80%" />
                    </Box>
                    <Box style={{ margin: '8px 0px' }}>
                        <SentenceSkeleton height="14px" width="50%" />
                    </Box>
                    <Box style={{ margin: '8px 0px' }}>
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
