import React, { Component } from 'react';
import SearchAppBar from './../../common/header/SearchAppBar';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moviesData from './dataApi';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
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
    },
    card: {
        maxWidth: 245,
    },
    media: {

        height: 0,
        paddingTop: '56.25%', // 16:9,

    },
    actions: {
        display: 'flex',
        
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        
    },
});


class Home extends Component {

    render(props) {
        console.log(moviesData);
        return (
            <div >
                <SearchAppBar />
                <GridList cols={3} className="classes.gridListUpcomingMovies" >
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <Card className={"classes.card"}>

                                <CardContent>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="Recipe" src={movie.user.profile_picture} className={"classes.avatar"}>

                                            </Avatar>
                                        }
                                        title={movie.user.username}
                                        subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        component="img"
                                        className={"classes.media"}
                                        image={movie.images.standard_resolution.url}
                                        title={movie.user.full_name}
                                        
                                    />
                                    <br />
                                    <Typography>
                                        {movie.caption.text}
                                    </Typography>

                                </CardContent>
                                <br />
                                <CardActions>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}
export default Home;
