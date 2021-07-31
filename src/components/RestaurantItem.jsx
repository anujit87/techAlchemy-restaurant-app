import { Box, Typography, Chip } from '@material-ui/core'
import React from 'react'
import { Colors } from '../colors'

const RestaurantItem = ({ restaurant }) => {
    return (
        <Box>
            <img src={restaurant.restaurantImage} alt="restaurant-img" style={{ height: '176px', width: '100%', borderRadius: '16px' }} />
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" style={{ fontWeight: 'bold', margin: '8px 0px' }}>{restaurant.restaurantName}</Typography>
                <Chip
                    label={restaurant.isOpen ? 'Open Now' : 'Closed'}
                    size="small"
                    style={{
                        color: restaurant.isOpen ? Colors.Primary : Colors.Secondary,
                        padding: '6px 4px',
                        borderRadius: '6px',
                        fontWeight: 600,
                        background: restaurant.isOpen ? 'rgba(80, 62, 157, 0.1)' : 'rgba(251, 109, 58, 0.1)'
                    }}
                />
            </Box>
            <Typography variant="caption">{restaurant.restaurantDescription}</Typography>
        </Box>
    )
}

export default RestaurantItem
