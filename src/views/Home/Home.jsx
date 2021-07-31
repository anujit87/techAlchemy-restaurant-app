import { Box, Grid, IconButton, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core';
import { Search, ShoppingCart } from '@material-ui/icons';
import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Colors } from '../../colors';
import CategoryItem from '../../components/common/CategoryItem';
import { CATEGORIES } from '../../constants';
import fetchRestaurants from '../../store/actions';
import FilterComponent from './FilterComponent';
import RestaurantCardSkeleton from './RestaurantCardSkeleton';
import RestaurantItem from './RestaurantItem';

const useStyles = makeStyles(() => ({
    root: { padding: '16px' },
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
    textbox: {
        marginBottom: 0,
        width: '350px',
        border: 'none'
    }
}));

const Home = () => {
    const classes = useStyles();
    
    const [searchTerm, setSearchTerm] = useState('');
    const { restaurants } = useSelector(state => state);
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [dispatch]);

    const filteredRestaurants = useMemo(
        () => {
            if (searchTerm !== '') {
                return restaurants.data.filter(res => res.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()));
            }
            return restaurants.data;
        },
        [restaurants.data, searchTerm]
    );

    return (
        <Box className={classes.root}>
            <Box className={classes.topContainer}>
                <IconButton
                    className={classes.iconPrimary}
                >
                    <ChevronLeft style={{ color: '#fff' }} />
                </IconButton>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search for Restaurants  (Press Enter to search)"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search style={{ color: 'var(--gray)' }} />
                                </InputAdornment>
                            )
                        }}
                        className={classes.textbox}
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <FilterComponent />
                    <IconButton
                        className={classes.iconSecondary}
                    >
                        <ShoppingCart style={{ color: '#fff' }} />
                    </IconButton>
                </Box>
            </Box>
            <Typography variant="h5" style={{ margin: '24px 0px' }}>Categories</Typography>
            <Box style={{ display: 'flex' }}>
                {CATEGORIES.map(category => (
                    <CategoryItem Logo={category.logo} name={category.name} key={`category-${category.name}`} />
                ))}
            </Box>
            <Typography variant="h5" style={{ margin: '24px 0px' }}>Restaurants</Typography>
            <Grid container spacing={2}>
                {restaurants.status === 'LOADING' && [0, 1, 2].map(num => (
                    <Grid item md={4} key={`skeleton-num`}>
                        <RestaurantCardSkeleton />
                    </Grid>
                ))}
                {filteredRestaurants.map(restaurant => (
                    <Grid onClick={() => history.push(`/restaurant/${restaurant.id}`)} item md={4} style={{ marginBottom: '8px', cursor: 'pointer' }} key={`restaurant-${restaurant.id}`}>
                        <RestaurantItem restaurant={restaurant} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Home;
