import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import ProfileIcon from './ProfileIcon';

const styles = theme=>({
  root: {
    width: '100%',
    position: 'static',
    flexGrow: 1,
  },
  buttons: {
    display:'flex',
    marginLeft: 'auto',
    color: theme.palette.primary.contrastText,
  },
});

export class Header extends Component {
    render() {
        const { classes } = this.props;
        const {user } = this.props
        return (
            <div>
                <AppBar className={classes.root}>
                    <Toolbar>
                        <Typography variant="h4">
                            PSOAStore
                        </Typography>
                        {user ? <div className={classes.buttons}> 
                        <IconButton>
                            <ProfileIcon />
                        </IconButton>
                        </div>
                        :
                        <>
                        </>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
Header.propTypes={
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);