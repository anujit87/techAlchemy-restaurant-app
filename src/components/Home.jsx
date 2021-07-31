import { Box, Grid, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core'
import { FilterList, Search, ShoppingCart } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { ChevronLeft } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import BakedLogo from '../assets/Baked.png'
import FastFoodLogo from '../assets/FastFood.png'
import HotDishLogo from '../assets/HotDish.png'
import SweetLogo from '../assets/Sweet.png'
import { Colors } from '../colors'
import fetchRestaurants from '../store/actions'
import CategoryItem from './CategoryItem'
import RestaurantCardSkeleton from './RestaurantCardSkeleton'
import RestaurantItem from './RestaurantItem'

const Home = () => {
    const { restaurants } = useSelector(state => state);
    console.log(restaurants)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [dispatch]);

    return (
        <Box style={{ padding: '16px' }}>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    style={{
                        background: Colors.Primary,
                        borderRadius: '10px'
                    }}
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
                        style={{
                            marginBottom: 0,
                            width: '350px',
                            border: 'none'
                        }}
                    />
                    <IconButton
                        style={{
                            background: Colors.Primary,
                            borderRadius: '10px',
                            margin: '0px 12px'
                        }}
                    >
                        <FilterList style={{ color: '#fff' }} />
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
            </Box>
            <Typography variant="h5" style={{ margin: '24px 0px' }}>Categories</Typography>
            <Box style={{ display: 'flex' }}>
                <CategoryItem Logo={BakedLogo} name="Baked" />
                <CategoryItem Logo={SweetLogo} name="Sweet" />
                <CategoryItem Logo={HotDishLogo} name="Hot Dish" />
                <CategoryItem Logo={FastFoodLogo} name="Fast Food" />
                <CategoryItem Logo={FastFoodLogo} name="Salads" />
            </Box>
            <Typography variant="h5" style={{ margin: '24px 0px' }}>Restaurants</Typography>
            <Grid container spacing={2}>
                {restaurants.status === 'LOADING' && [0, 1, 2].map(num => (
                    <Grid item md={4} key={`skeleton-num`}>
                        <RestaurantCardSkeleton />
                    </Grid>
                ))}
                {restaurants.data.map(restaurant => (
                    <Grid item md={4} style={{ marginBottom: '8px' }} key={`restaurant-${restaurant.id}`}>
                        <RestaurantItem restaurant={restaurant} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Home
