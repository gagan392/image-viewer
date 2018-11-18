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
import IconButton from '@material-ui/core/IconButton';

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
	async UNSAFE_componentWillMount() {
		const token = sessionStorage.getItem("access-token");
		console.log(" token ", token);
		if(token === null) {
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
				<SearchAppBar search />
				<GridList cols={3} className={classes.gridListImages} >
					{this.state.mediaList.length > 0 && this.state.mediaList.map(movie => (
						<Card key={movie.id} className={classes.card}>
							<CardContent>
								<CardHeader
									avatar={
										<Avatar aria-label="Recipe" src={movie.user.profile_picture}>
										</Avatar>
									}
									title={movie.user.username}
									subheader="September 14, 2016"
								/>
								<CardMedia
									component="img"
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
					))}
				</GridList>
			</div>
		)
	}
}
export default withStyles(styles)(Home);