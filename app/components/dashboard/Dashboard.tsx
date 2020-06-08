import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ProjectInfo from './ProjectInfo';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      }    
}));

export default function DashBoard() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <ProjectInfo />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Link component={RouterLink} to='/processes'>Processes</Link>
                <Link component={RouterLink} to='/registry'>Registry</Link>
                <Link component={RouterLink} to='/dlls'>DLLs</Link>
                <Link component={RouterLink} to='/drivers'>Drivers</Link>
                <Link component={RouterLink} to='/files'>Files</Link>
                <Link component={RouterLink} to='/strings'>Strings</Link>
                <Link component={RouterLink} to='/vads'>VADs</Link>
                <Link component={RouterLink} to='/services'>Services</Link>
                <Link component={RouterLink} to='/malfind'>Malfind</Link>
                <Link component={RouterLink} to='/yara'>Yara</Link>
              </Paper>
            </Grid>
        </Grid>
    );
}