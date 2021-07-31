import { Box, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { ChevronLeft, Language, Phone, Schedule, ShoppingCart } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Colors } from '../../colors';
import { fetchRestaurantDetails } from '../../store/actions';
import RestaurantDetailsSkeleton from './RestaurantDetailsSkeleton';

const useStyles = makeStyles(() => ({
    container: { padding: '16px' },
    topContainer: { display: 'flex', justifyContent: 'space-between' },
    iconPrimary: {
        background: Colors.Primary,
        borderRadius: '10px',
        '&:hover': {
            background: Colors.Primary
        }
    },
    iconSecondary: {
        background: Colors.Secondary,
        borderRadius: '10px',
        '&:hover': {
            background: Colors.Secondary
        }
    },
    img: {
        width: '100%', height: '300px', borderRadius: '16px'
    },
    additionalInfo: { color: '#626264', margin: '0px 8px' },
    additionalInfoContainer: { display: 'flex', margin: '8px 0px' }
}));

const RestaurantDetails = () => {
    const classes = useStyles();
    const { id: restaurantId } = useParams();
    const history = useHistory();
    const { restaurantDetails } = useSelector(state => state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRestaurantDetails(restaurantId));
    }, [dispatch, restaurantId]);
    return (
        <Box className={classes.container}>
            <Box className={classes.topContainer}>
                <IconButton
                    className={classes.iconPrimary}
                    onClick={() => history.push('/')}
                >
                    <ChevronLeft style={{ color: '#fff' }} />
                </IconButton>
                <IconButton
                    className={classes.iconSecondary}
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
                            <Box className={classes.additionalInfoContainer}>
                                <Schedule style={{ color: '#626264' }} />
                                <Typography variant="subtitle1" className={classes.additionalInfo}>{restaurantDetails.data.openingHours}</Typography>
                            </Box>
                            <Box className={classes.additionalInfoContainer}>
                                <Phone style={{ color: '#626264' }} />
                                <Typography variant="subtitle1" className={classes.additionalInfo}>{restaurantDetails.data.contactNumber}</Typography>
                            </Box>
                            <Box className={classes.additionalInfoContainer}>
                                <Language style={{ color: '#626264' }} />
                                <Link to={{ pathname: restaurantDetails.data.websiteUrl }} target="_blank">
                                    <Typography variant="subtitle1" className={classes.additionalInfo}>{restaurantDetails.data.websiteUrl}</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <img src={restaurantDetails.data.restaurantImage} alt="restaurant-img" className={classes.img} />
                    </Grid>
                </Grid>
            )}
        </Box>
    )
}

export default RestaurantDetails
