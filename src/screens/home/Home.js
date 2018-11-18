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
import { FormControl, InputLabel, Input, Button, FormHelperText } from "@material-ui/core";
import moviesData from './dataApi';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'


const styles = theme => ({
	gridListMain: {
		transform: 'translateZ(0)',
		cursor: 'pointer'
	},
	card: {
		height: 'inherit !important',
		margin: '1rem'
	},
	gridListImages: {
		marginTop: '0.5rem !important'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
      },
    media:{
        display:'flex',
        height:'100%',
        transform: 'translateZ(0)',
        width: '100%'
    }
});


class Home extends Component {
    constructor() {
        super();
        this.state = {
            favoriteIconId: 1,
            favoriteIconlikes: 1,
            backgroundColor: "balck",
        }
    }
    likeThePic() {

        this.setState({
            favoriteIconlikes : this.state.favoriteIconlikes + 1,
            
        });
        
    }
    render(props) {
//console.log(moviesData);
        return (
            <div >
                <SearchAppBar />
                <GridList cols={3} className="classes.gridListUpcomingMovies" >
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                        
                            <Card className="classes.gridListUpcomingMovies">
                            
                                <CardContent style={{height:"200px"}}>
                                <div className="flexcontainer">
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="User" src={movie.user.profile_picture} className={"classes.avatar"}>

                                            </Avatar>
                                        }
                                        title={movie.user.username}
                                        subheader="September 14, 2016"
                                    />
                                    </div>
                                    <div className="flexcontainer">
                                    <CardMedia
                                        //component="img"
                                        className={"classes.media"}
                                        image={movie.images.standard_resolution.url}
                                        title={movie.user.full_name}

                                    />
                                    </div>
                                    <br />
                                    <div className="flexcontainer">
                                    <Typography variant="caption" color="default">
                                        {movie.caption.text}
                                    </Typography>
                                    <div><span className="inlineObjects">
                                    <FavoriteBorder id="likeButton"
                                    onClick={this.likeThePic.bind(this)}>
                                    </FavoriteBorder>
                                    <Typography variant="caption" className={"classes.textForLike"}>
                                        <span>{this.state.favoriteIconlikes} likes</span>
                                    </Typography>

                                    </span></div>
                                    </div>
                                </CardContent>
                                <CardActions>
                                <FormControl>
							<InputLabel htmlFor="comment">Add a comment</InputLabel>
							<Input id="comment"/>
							<FormHelperText>
								<span className="textColorBlue">Add</span>
							</FormHelperText>
						</FormControl>
                                <Button variant="contained" color="primary" > ADD </Button>
                                </CardActions>
                            </Card>
                            
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}
export default withStyles(styles)(Home);
