import { Box, Chip, Typography, Button, makeStyles } from '@material-ui/core';
import { Close, Schedule, ArrowForward } from '@material-ui/icons';
import React from 'react';
import { Colors } from '../../colors';

const useStyles = makeStyles(() => ({
    button: {
        background: Colors.Primary,
        color: '#fff',
        textTransform: 'none',
        fontWeight: 'bold',
        width: '100%',
        fontSize: '16px',
        padding: '12px',
        borderRadius: '12px',
        marginBottom: '16px'
    },
    textCenter: { textAlign: 'center' },
    chip: {
        color: Colors.Secondary,
        background: 'rgba(251, 109, 58, 0.1)',
        padding: '32px 6px',
        borderRadius: '12px',
        marginTop: '16px'
    },
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-between' }
}));

const CardsContainer = () => {
    const classes = useStyles();
    return (
        <div className="cards-container">
            <div className="card" style={{ position: 'absolute', top: 24, width: '176px' }}></div>
            <div className="card" style={{ position: 'absolute', top: 12, width: '208px' }}></div>
            <div className="card">
                <Close style={{ position: 'absolute', right: 15, top: 10 }} />
                <Box className={classes.container}>
                    <Chip
                        label={<Schedule style={{ fontSize: '32px' }} />}
                        className={classes.chip}
                    />
                    <Typography variant="h6">Your Order is now Ready</Typography>
                    <Box>
                        <Typography component="p" variant="caption" className={classes.textCenter}>Splint Doumo</Typography>
                        <Typography component="p" variant="caption" className={classes.textCenter}>Order Id: #ED564F</Typography>
                    </Box>
                    <Button
                        endIcon={<ArrowForward />}
                        className={classes.button}
                    >
                        Details
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default CardsContainer
