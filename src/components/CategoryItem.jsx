import { Box, Typography } from '@material-ui/core'
import React from 'react'

const CategoryItem = ({ Logo, name }) => {
    return (
        <Box style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
            <img src={Logo} alt="cat-logo" style={{ padding: '6px', background: '#f7f7f7', borderRadius: '12px' }} />
            <Typography style={{ fontWeight: 'bold', margin: '0px 6px' }}>{name}</Typography>
        </Box>
    )
}

export default CategoryItem
