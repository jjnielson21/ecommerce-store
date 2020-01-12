import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        margin: '100px',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
});

function CheckOut(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    "Nothing due Today"
        </Typography>
                <Typography component="p">
                    Checkout not set up please come back later. 
        </Typography>
            </Paper>
        </div>
    );
}

CheckOut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckOut);