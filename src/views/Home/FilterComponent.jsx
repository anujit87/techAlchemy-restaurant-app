import { Drawer, IconButton, Box, Typography, Chip, Button } from '@material-ui/core';
import { Close, FilterList, Whatshot } from '@material-ui/icons';
import React, { useState } from 'react';
import { Colors } from '../../colors';
import { CUISINES } from '../../constants';

const FilterComponent = () => {
    const [filterDrawerState, setFilterDrawerState] = useState(false);
    return (
        <>
            <IconButton
                style={{
                    background: Colors.Primary,
                    borderRadius: '10px',
                    margin: '0px 12px'
                }}
                onClick={() => setFilterDrawerState(true)}
            >
                <FilterList style={{ color: '#fff' }} />
            </IconButton>
            <Drawer
                anchor="right"
                open={filterDrawerState}
                onClose={() => setFilterDrawerState(false)}
            >
                <Box style={{ width: '30vw', padding: '16px', height: '100%' }}>
                    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Box>
                            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '24px' }}>Search Filters</Typography>
                                <IconButton
                                    style={{
                                        borderRadius: '16px',
                                        background: '#f7f7f7'
                                    }}
                                    onClick={() => setFilterDrawerState(false)}
                                >
                                    <Close />
                                </IconButton>
                            </Box>
                            <Box style={{ marginTop: '24px' }}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '32px' }}>Sort by</Typography>
                                <Box style={{ display: 'flex', alignItems: 'center' }}>
                                    <Chip
                                        label={<Whatshot style={{ color: Colors.Secondary }} />}
                                        style={{
                                            background: 'rgba(251, 109, 58, 0.1)',
                                            padding: '24px 4px',
                                            borderRadius: '12px'
                                        }}
                                    />
                                    <Typography style={{ fontWeight: 'bold', color: Colors.Secondary, margin: '0px 8px' }}>open</Typography>
                                </Box>
                            </Box>
                            <Box style={{ marginTop: '24px' }}>
                                <Typography style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '32px' }}>Cuisine</Typography>
                                {CUISINES.map(cuisine => (
                                    <Chip
                                        label={cuisine}
                                        style={{
                                            padding: '8px 12px',
                                            borderRadius: '6px',
                                            margin: '8px 4px',
                                            background: '#f7f7f7',
                                            color: '#626264',
                                            fontSize: '16px'
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                disableElevation
                                style={{
                                    background: Colors.Primary,
                                    color: '#fff',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    width: '100%',
                                    fontSize: '20px',
                                    padding: '16px',
                                    borderRadius: '12px'
                                }}
                            >
                                Apply Filters
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default FilterComponent;
