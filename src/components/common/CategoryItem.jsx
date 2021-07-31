import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex', alignItems: 'center', marginRight: '16px'
    },
    img: {
        padding: '6px', background: '#f7f7f7', borderRadius: '12px'
    },
    title: {
        fontWeight: 'bold', margin: '0px 6px'
    }
}));

const CategoryItem = ({ Logo, name }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <img src={Logo} alt="cat-logo" className={classes.img} />
            <Typography className={classes.title}>{name}</Typography>
        </Box>
    )
}

export default CategoryItem
