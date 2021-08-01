import { IconButton } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import React, { useState } from 'react';
import { Colors } from '../../../colors';
import FilterDrawer from './FilterDrawer';

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
            {filterDrawerState && <FilterDrawer open={filterDrawerState} onClose={() => setFilterDrawerState(false)} />}
        </>
    )
}

export default FilterComponent;
