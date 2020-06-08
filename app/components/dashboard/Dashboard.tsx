import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ProjectInfo from './ProjectInfo';
import DashboardErrorBoundary from './DashboardErrorBoundary';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';


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


function DashBox({to, name}) {
  return (
    <Grid item xs={12} md={4} lg={4}>
      <RouterLink to={to}>
        <Card>
          <CardActionArea>
            <CardMedia 

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </RouterLink>
    </Grid>
  )
}



export default function DashBoard() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <DashboardErrorBoundary>
              <Grid item xs={12} md={12} lg={12}>
                <ProjectInfo />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <DashBox to='/processes' name='Processes' />
                  <DashBox to='/registry' name='Registry' />
                  <DashBox to='/dlls' name='DLLs' />
                  <DashBox to='/drivers' name='Drivers' />
                  <DashBox to='/files' name='Files' />
                  <DashBox to='/strings' name='Strings' />
                  <DashBox to='/vads' name='VADs' />
                  <DashBox to='/services' name='Services' />
                  <DashBox to='/malfind' name='Malfind' />
                  <DashBox to='/yara' name='Yara' />
                </Grid>
              </Grid>
            </DashboardErrorBoundary>
        </Grid>
    );
}