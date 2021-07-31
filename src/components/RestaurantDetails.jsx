import { Box, Grid, IconButton, Typography } from '@material-ui/core'
import { ChevronLeft, Language, Phone, Schedule, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Colors } from '../colors'
import { fetchRestaurantDetails } from '../store/actions'
import RestaurantDetailsSkeleton from './RestaurantDetailsSkeleton'

const RestaurantDetails = () => {
    const { id: restaurantId } = useParams();
    const history = useHistory();
    const { restaurantDetails } = useSelector(state => state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRestaurantDetails(restaurantId));
    }, [dispatch, restaurantId]);
    return (
        <Box style={{ padding: '16px' }}>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    style={{
                        background: Colors.Primary,
                        borderRadius: '10px'
                    }}
                    onClick={() => history.push('/')}
                >
                    <ChevronLeft style={{ color: '#fff' }} />
                </IconButton>
                <IconButton
                    style={{
                        background: Colors.Secondary,
                        borderRadius: '10px'
                    }}
                >
                    <ShoppingCart style={{ color: '#fff' }} />
                </IconButton>
            </Box>
            {restaurantDetails.status === 'LOADING' && (
                <RestaurantDetailsSkeleton />
            )}
            {restaurantDetails.data && (
            <Grid container spacing={2} style={{ margin: '20px 0px' }}>
                <Grid item md={6}>
                    <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '8px' }}>{restaurantDetails.data.restaurantName}</Typography>
                    <Typography variant="subtitle1" style={{ color: 'gray' }}>{restaurantDetails.data.restaurantDescription}</Typography>
                    <Box style={{ marginTop: '24px' }}>
                        <Box style={{ display: 'flex', margin: '8px 0px' }}>
                            <Schedule style={{ color: '#626264' }} />
                            <Typography variant="subtitle1" style={{ color: '#626264', margin: '0px 8px' }}>{restaurantDetails.data.openingHours}</Typography>
                        </Box>
                        <Box style={{ display: 'flex', margin: '8px 0px' }}>
                            <Phone style={{ color: '#626264' }} />
                            <Typography variant="subtitle1" style={{ color: '#626264', margin: '0px 8px' }}>{restaurantDetails.data.contactNumber}</Typography>
                        </Box>
                        <Box style={{ display: 'flex', margin: '8px 0px' }}>
                            <Language style={{ color: '#626264' }} />
                            <Link to={{ pathname: restaurantDetails.data.websiteUrl }} target="_blank">
                                <Typography variant="subtitle1" style={{ color: '#626264', margin: '0px 8px' }}>{restaurantDetails.data.websiteUrl}</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <img src={restaurantDetails.data.restaurantImage} alt="restaurant-img" style={{ width: '100%', height: '300px', borderRadius: '16px' }} />
                </Grid>
            </Grid>
            )}
        </Box>
    )
}

export default RestaurantDetails
