import React, { Component, Fragment } from 'react';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import {updateUser} from './../../ducks/reducer';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',

  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'white',
    backgroundColor: 'black',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Layout extends Component {
  state = {
    mobileOpen: false,
  };

  async componentDidMount () {
    let res = await axios.get(`/auth/user-data`)
    console.log('home component user', res.data)
    this.props.updateUser(res.data)
}

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  async logout () {
    await axios.get(`/auth/logout`)
    this.componentDidMount();
  }

  render() {

    const { classes, children } = this.props;
    const { mobileOpen } = this.state

    const drawer = (
      <div>
        <Hidden xsDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MenuItem component={Link} to='/'>
            home
          </MenuItem>
          <MenuItem component={Link} to='/hikes'>
            find a hike
          </MenuItem>
          <MenuItem component={Link} to='/gear'>
            pack your pack
          </MenuItem>
          <MenuItem component={Link} to='/setalert'>
            set an alert
          </MenuItem>
          <MenuItem component={Link} to='/finalchecklist'>
            final checklist
          </MenuItem>
          <MenuItem style={{ position: 'fixed', bottom: '10px', width: '207px' }} component={Link} to='/resources'>
            hiker resources
          </MenuItem>
        </MenuList>

      </div>
    );

    return (
      <Fragment>
        <div className={classes.root}>
          <CssBaseline />

          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <IconButton
                color="inherit"
                style={{marginRight: '10px'}}
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" color="inherit" style={{textTransform: 'lowercase', letterSpacing: '2px'}} noWrap>
                Trail Angel
            </Typography>
            </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                {this.props.user.username ?
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant='caption' color='inherit' style={{ marginRight: '15px' }}>hi, {this.props.user.username}!</Typography>
                    <Button variant='contained' style={{ color: 'black', backgroundColor: 'white', maxWidth: '30px', maxHeight: '10px', fontSize: '10px'}} onClick={() => this.logout()}>Logout</Button>
                  </div>
                  :
                  <div>
                    <Button variant='contained' style={{ color: 'black', backgroundColor: 'white' }} component={Link} to='/login'>Log In / Register</Button>
                  </div>}
              </div>

            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swap with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            {/* <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden> */}
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  let { user } = state
  return {
      user
  }
}

export default withRouter(connect(mapStateToProps, {updateUser})(withStyles(styles)(Layout)));