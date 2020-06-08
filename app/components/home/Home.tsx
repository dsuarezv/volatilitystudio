import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BackIcon from '@material-ui/icons/NavigateBefore';
import MenuIcon from '@material-ui/icons/Reorder';

import DashboardRoutes from '../dashboard/DashboardRoutes';
import ThemeChooser, { themeX } from './ThemeChooser';


const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default withRouter(function Home(p) {
    const classes = useStyles();
    const isBackVisible = p.location.pathname != '/';

    return (
      <MuiThemeProvider theme={themeX.target}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar)}>
            <Toolbar className={classes.toolbar}>
              {isBackVisible ? 
                <IconButton onClick={() => { p.history.goBack(); }} style={{ marginRight: '10px'}}><BackIcon /></IconButton> : 
                <MenuIcon style={{ marginRight: '20px'}}/>
              }
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Volatility Studio
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <ThemeChooser />
            </Toolbar>
          </AppBar>

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container className={classes.container}>
              <DashboardRoutes />
            </Container>
          </main>
        </div>
      </MuiThemeProvider>
    );
});
