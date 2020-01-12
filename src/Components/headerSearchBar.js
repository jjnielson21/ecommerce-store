import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import store from '../Store/store';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  
    root: {
        width: '100%',
        
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            margin:'20px',
            width: 'auto',
        },
    },
    searchIcon: {
        marginLeft: '20px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingLeft: '60px',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
});

const mapStateToProps = (state) => {
        return {
        cart: state.cart,
    }
}


class HeaderSearchBar extends React.Component {

    count =() => (this.props.cart.reduce((a, b) => ({ count: a.count + b.count })).count)

    string = (e) => {
            store.dispatch({ type: 'SEARCH', value: e.target.value })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="fixed" color='secondary'>
                    <Toolbar>
                        <Typography className={classes.title} variant="h4" color="inherit" noWrap>
                            <Link to={{ pathname: '/' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Nielson Electronics & Appliances
                            </Link>
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={this.string}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className='row'>
                            <Link to={{ pathname: '/cart' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <IconButton color="inherit" >
                                {this.props.cart.length ? 
                                    <Badge badgeContent={
                                        this.count()
                                    }
                                        color="primary">
                                        <ShoppingCartIcon />
                                    </Badge> : 
                                        <ShoppingCartIcon />
                                }
                            </IconButton>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

HeaderSearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    cart: PropTypes.arrayOf(
        PropTypes.shape({item: PropTypes.object, count: PropTypes.number})
    )

};


export default connect(mapStateToProps)(withStyles(styles)(HeaderSearchBar));