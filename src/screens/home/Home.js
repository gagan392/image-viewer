import React, { Component } from 'react';
import HeaderBar from './../../common/header/HeaderBar';
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
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { FormControl, InputLabel, FormHelperText, Input, Button } from '@material-ui/core';

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
	}
});


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mediaList: []
		}
	}

	filterMedia = (filterText) => {
		const mediaList = [];
		const oldList = this.state.mediaList;

		oldList.forEach(li => {
			if (li.caption.text.includes(filterText)) {
				mediaList.push(li);
			}
		});

		this.setState({ mediaList: mediaList });
	}

	likeThePic = pic => {
		const likes = pic.like === undefined ? 1 : pic.like + 1;
		const mediaList = this.state.mediaList;

		mediaList.forEach(media => {
			if (media.id === pic.id) {
				media.like = likes
			}
		});

		this.setState({ mediaList: mediaList });

	}
	async UNSAFE_componentWillMount() {
		const token = sessionStorage.getItem("access-token");
		console.log(" token ", token);
		if (token === null) {
			this.props.history.push({
				pathname: `/`,
			});
			return;
		}

		const { apiClient } = this.props;

		const mediaList = await apiClient.getMdeia();
		console.log(" Media list ", mediaList);
		this.setState({
			mediaList: mediaList.data
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<div >
				<HeaderBar search searchHandler={() => this.filterMedia}/>
				<GridList cols={3} className={classes.gridListImages} >
					{this.state.mediaList.length > 0 && this.state.mediaList.map(media => (
						<Card key={media.id} className={classes.card}>
							<CardContent>
								<CardHeader
									avatar={
										<Avatar aria-label="Recipe" src={media.user.profile_picture}>
										</Avatar>
									}
									title={media.user.username}
									subheader="September 14, 2016"
								/>
								<CardMedia
									component="img"
									image={media.images.standard_resolution.url}
									title={media.user.full_name}
								/>
								<br />
								<Typography>
									{media.caption.text}
								</Typography>
								<div className="flexcontainer">
									<Typography variant="caption" color="default">
										{media.caption.text}
									</Typography>
									<div><span className="inlineObjects">
										<FavoriteBorder id="likeButton"
											onClick={() => this.likeThePic(media)}>
										</FavoriteBorder>
										<Typography variant="caption" className={"classes.textForLike"}>
											<span>{media.like === undefined ? 0 : media.like} likes</span>
										</Typography>

									</span></div>
								</div>
							</CardContent>
							<br />
							<CardActions>
								<FormControl>
									<InputLabel htmlFor="comment">Add a comment</InputLabel>
									<Input id="comment" />
									<FormHelperText>
										<span className="textColorBlue">Add</span>
									</FormHelperText>
								</FormControl>
								<Button variant="contained" color="primary" > ADD </Button>
							</CardActions>
						</Card>
					))}
				</GridList>
			</div>
		)
	}
}
export default withStyles(styles)(Home);