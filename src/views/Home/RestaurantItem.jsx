import { Box, Typography, Chip, makeStyles } from '@material-ui/core';
import React from 'react';
import { Colors } from '../../colors';

const useStyles = makeStyles(() => ({
    img: {
        height: '176px', width: '100%', borderRadius: '16px'
    },
    container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    chip: ({ open }) => ({
        color: open ? Colors.Primary : Colors.Secondary,
        padding: '6px 4px',
        borderRadius: '6px',
        fontWeight: 600,
        background: open ? 'rgba(80, 62, 157, 0.1)' : 'rgba(251, 109, 58, 0.1)'
    }),
    title: { fontWeight: 'bold', margin: '8px 0px' }
}));

const RestaurantItem = ({ restaurant }) => {
    const classes = useStyles({ open: restaurant.isOpen });
    return (
        <Box>
            <img src={restaurant.restaurantImage} alt="restaurant-img" className={classes.img} />
            <Box className={classes.container}>
                <Typography variant="h6" className={classes.title}>{restaurant.restaurantName}</Typography>
                <Chip
                    label={restaurant.isOpen ? 'Open Now' : 'Closed'}
                    size="small"
                    className={classes.chip}
                />
            </Box>
            <Typography variant="caption">{restaurant.restaurantDescription}</Typography>
        </Box>
    )
}

export default RestaurantItem
