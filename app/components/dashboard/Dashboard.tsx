import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ProjectInfo from './ProjectInfo';
import DashboardErrorBoundary from './DashboardErrorBoundary';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';


function DashBox({ to, name }) {
	return (
		<Grid item xs={12} md={4} lg={4}>
			<RouterLink to={to} style={{ textDecoration: 'none' }}>
				<Card>
					<CardActionArea>
						<CardMedia>
                            <FastfoodIcon fontSize='large' color='secondary' style={{ marginTop: '20px', marginLeft: '20px' }}/>
                        </CardMedia>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{name}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</RouterLink>
		</Grid>
	);
}

export default function DashBoard() {

    console.log("ARGS", require('electron').remote.process.argv);

	return (
		<Grid container spacing={3}>
			<DashboardErrorBoundary>
				<Grid item xs={12} md={12} lg={12}>
					<ProjectInfo />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={3}>
						<DashBox to="/processes" name="Processes" />
						<DashBox to="/registry" name="Registry" />
						<DashBox to="/dlls" name="DLLs" />
						<DashBox to="/drivers" name="Drivers" />
						<DashBox to="/files" name="Files" />
						<DashBox to="/strings" name="Strings" />
						<DashBox to="/vads" name="VADs" />
						<DashBox to="/services" name="Services" />
						<DashBox to="/malfind" name="Malfind" />
						<DashBox to="/yara" name="Yara" />
					</Grid>
				</Grid>
			</DashboardErrorBoundary>
		</Grid>
	);
}
