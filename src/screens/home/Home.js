import React, { Component } from 'react';
import SearchAppBar from './../../common/header/SearchAppBar';
import './Home.css';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moviesData from './dataApi';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },

    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {

        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
    },
    title: {
        color: theme.palette.primary.light,
    }
});






class Home extends Component {

    render(props) {
        console.log(moviesData);
        return (
            <div >
                <SearchAppBar />
                <GridList cols={3} className="classes.gridListUpcomingMovies">
                    {moviesData.map(movie =>(
                        <GridListTile key={movie.id}>
                            <img src={movie.images.standard_resolution.url} className="classes.mposter"/>
                            <GridListTileBar title={movie.caption.text}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}
export default Home;
