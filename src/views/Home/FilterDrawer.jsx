import { Drawer, Box, IconButton, Typography, Chip, Button, makeStyles } from '@material-ui/core';
import { Whatshot, Close } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../colors';
import { CUISINES } from '../../constants';
import { UPDATE_FILTER } from '../../store/constants';

const useStyles = makeStyles(() => ({
    root: { width: '30vw', padding: '16px', height: '100%' },
    container: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' },
    header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    icon: { borderRadius: '16px', background: '#f7f7f7' },
    button: {
        background: Colors.Primary,
        color: '#fff',
        textTransform: 'none',
        fontWeight: 'bold',
        width: '100%',
        fontSize: '20px',
        padding: '16px',
        borderRadius: '12px',
        '&:hover': {
            background: Colors.Primary,
        }
    },
    headerText: { fontWeight: 'bold', fontSize: '24px', marginBottom: '32px' },
    filterHeaderText: { fontWeight: 'bold', fontSize: '24px' },
    cuisineChip: {
        padding: '8px 12px',
        borderRadius: '6px',
        margin: '8px 4px',
        background: '#f7f7f7',
        color: '#626264',
        fontSize: '16px'
    },
    sortByContainer: { display: 'flex', alignItems: 'center', cursor: 'pointer' }
}));

const FilterDrawer = ({ open, onClose }) => {
    const classes = useStyles();
    const { appliedFilter } = useSelector(state => state);
    console.log(appliedFilter)
    const [appliedFilterLocal, setAppliedFilterLocal] = useState(appliedFilter);
    const dispatch = useDispatch();
    const onSortByClick = useCallback(
        () => setAppliedFilterLocal({ ...appliedFilterLocal, sortByOpen: !appliedFilterLocal.sortByOpen  }),
        [appliedFilterLocal]
    );
    const updateCuisineFilter = useCallback(
        (cuisine) => setAppliedFilterLocal({ ...appliedFilterLocal, cuisines: [cuisine] }),
        [appliedFilterLocal]
    );
    const handleFilterApply = useCallback(
        () => {
            dispatch({ type: UPDATE_FILTER, payload: appliedFilterLocal });
            onClose();
        },
        [appliedFilterLocal, dispatch, onClose]
    );
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >
            <Box className={classes.root}>
                <Box className={classes.container}>
                    <Box>
                        <Box className={classes.header}>
                            <Typography className={classes.filterHeaderText}>Search Filters</Typography>
                            <IconButton
                                className={classes.icon}
                                onClick={onClose}
                            >
                                <Close />
                            </IconButton>
                        </Box>
                        <Box style={{ marginTop: '24px' }}>
                            <Typography className={classes.headerText}>Sort by</Typography>
                            <Box className={classes.sortByContainer} onClick={onSortByClick}>
                                <Chip
                                    label={<Whatshot style={{ color: appliedFilterLocal.sortByOpen ? Colors.Secondary : '#626264' }} />}
                                    style={{
                                        background: appliedFilterLocal.sortByOpen ? 'rgba(251, 109, 58, 0.1)' : '#f7f7f7',
                                        padding: '24px 4px',
                                        borderRadius: '12px',
                                        cursor: 'pointer'
                                    }}
                                />
                                <Typography style={{ fontWeight: 'bold', color: appliedFilterLocal.sortByOpen ? Colors.Secondary : '#626264', margin: '0px 8px' }}>open</Typography>
                            </Box>
                        </Box>
                        <Box style={{ marginTop: '24px' }}>
                            <Typography className={classes.headerText}>Cuisine</Typography>
                            {CUISINES.map(cuisine => (
                                <Chip
                                    onClick={() => updateCuisineFilter(cuisine)}
                                    label={cuisine}
                                    className={classes.cuisineChip}
                                    key={cuisine}
                                    style={{
                                        color: appliedFilterLocal.cuisines.includes(cuisine) ? Colors.Secondary : '#626264',
                                        background: appliedFilterLocal.cuisines.includes(cuisine) ? 'rgba(251, 109, 58, 0.1)' : '#f7f7f7',
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            disableElevation
                            className={classes.button}
                            onClick={handleFilterApply}
                        >
                            Apply Filters
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};

export default FilterDrawer;
