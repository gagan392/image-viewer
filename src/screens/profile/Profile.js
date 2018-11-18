import React, { Component } from 'react';
import SearchAppBar from './../../common/header/SearchAppBar';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import Divider from '@material-ui/core/Divider';
import Icon from "@material-ui/core/Icon";

import './Profile.css';



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    flex: {
        display: 'flex'
    },
    container: {
        margin: '0 100px',
    },
    header: {
        borderBottom: '1px solid #efefef',
        page_right: '0',
        padding: '30px 0',
        position: 'relative',
        top: '0',
        width: '287px',
    },
    head_avatar: {
        position: 'absolute',
        width: '50px',
        height: '50px',
    },
    avatar: {
        width: '150px',
        height: '150px',
        margin: '0 50px'
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        margin: '25px 10px',
        justifyContent: 'center',
    },
    gridList: {
        width: "500px",
        height: "500px",
    },
    user_dtl: {
        fontWeight: '500',
        fontSize: '2em',
    },
    user_full_name: {
        fontWeight: '400',
        fontSize: '1.6em',
    },
    user_info: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    page_left: {
        page_right: '60px',
    },
    page_right: {
        page_left: '10px'
    },
    paper: {
        position: 'relative',
        width: theme.spacing.unit * 20,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        margin: 'auto',
        top: '30vh'
    },
    no_margin: {
        margin: '0'
    },
    bkg_paper: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        margin: "auto",
        position: "absolute",
        display: "grid",
        gridTemplateColumns: "600px 335px",
        width: '935px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        height: "600px",
        alignItems: "center",
    },
    right_margin: {
        margin: '13px 0 0 65px',
    },
    img: {
        maxWidth: '600px',
        maxHeight: '600px',
    },
    data: {
        paddingLeft: '12px',
        maxWidth: '335px',
        height: '100%',
    },
    commentForm: {
        width: '300px',
        margin: '0',
        position: 'absolute',
        bottom: '15px',
        right: '15px',
    },
    literalForm: {
        display: 'flex',
        justifyContent: 'space-around',
    }
});

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            profile_picture:"",
            username: "",
            media:"",
            follows:"",
            followed_by:"",
            full_name:"",
            modalIsOpen: false,
            uploaded_pics: [],
            hashtags: [],
            comments: [{
                content: "",
                user: "",
                id: ""
            }
            ],
            likes: "",
            caption: "",
            url: "",
            active: false,
            dispColor: "transparent",
            clicked: false,
            picId: "",
            id: "",
            open: false,
            imgPopup: false,
            currentImg: "",
            currentCap: "",
            likeColor: "dark",
            liked: false,
        }
        this.accessToken = sessionStorage.getItem("access-token") ? sessionStorage.getItem("access-token") :'8661035776.d0fcd39.87fd934e04f84253aaf234d8bd4e4c65';
        this.profileUrl = 'https://api.instagram.com/v1/users/self/';
        this.postsUrl = 'https://api.instagram.com/v1/users/self/media/recent';

        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.likeHandler = this.likeHandler.bind(this);
        this.commentSubmit = this.commentSubmit.bind(this);
    }

    clickHandler = (e, id, image, data) => {
        this.setState({ imgPopup: true, currentImg: image, currentCap: data.caption.text, likes: data.likes.count });
    }

    changeHandler(e) {
        this.setState({ text: e.target.value });
    }

    submitHandler(e) {
        e.preventDefault();
        var text = this.state.text;
        this.setState({ full_name: text });
        this.closeHandler();
    }

    likeHandler(e) {
        if (!this.state.liked) {

            this.setState({ liked: true, likeColor: "error", likes: this.state.likes + 1 });
        }
        else if (this.state.liked) {
            this.setState({ liked: false, likeColor: "dark", likes: this.state.likes - 1 });
        }
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    openHandler = () => {
        this.setState({ open: true });
    };
    closeHandler = () => {
        this.setState({ open: false });
    };
    
    closePopupHandler = () => {
        this.setState({ imgPopup: false });
    };

    commentSubmit(e) {
        e.preventDefault();
        var text = this.state.text;
        this.setState({ comments: [...this.state.comments, text] });

    }
    
    componentWillMount() {
        let that = this;
        let xhrProfile = new XMLHttpRequest();
        xhrProfile.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let response = JSON.parse(this.responseText);
                that.setState({profile_pic: response.data.profile_picture});
                that.setState({username: response.data.username});
                that.setState({full_name: response.data.full_name});
                that.setState({media: response.data.counts.media});
                that.setState({follows: response.data.counts.follows});
                that.setState({followed_by: response.data.counts.followed_by});
            }

        })


        xhrProfile.open("GET", this.profileUrl + "?access_token=" + this.accessToken);
        xhrProfile.setRequestHeader("Cache-Control", "no-cache");
        xhrProfile.send();



        let xhrPosts = new XMLHttpRequest();
        xhrPosts.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let response = JSON.parse(this.responseText);
                that.setState({uploaded_pics: response.data});
                that.setState({likes: response.data.likes});
                that.setState({url: response.data[0].images.standard_resolution.url});
                that.setState({id: response.data.id});
            }
        })

        xhrPosts.open("GET", this.postsUrl + "?access_token=" + this.accessToken);
        xhrPosts.setRequestHeader("Cache-Control", "no-cache");
        xhrPosts.send();

    }


    render() {
        const { classes } = this.props;
        return (
                <div>
                    <SearchAppBar />
                    <div className={classes.profile}>
                        <div className={classes.profilePicture}>
                            <Avatar className={[classes.avatar].join(' ')} src={this.state.profile_picture} alt="profile" />
                        </div>
                        <div>
                            <p className={[classes.user_dtl, classes.no_margin].join(' ')}>{this.state.username}</p>
                            <div className={[classes.user_info, classes.no_margin].join(' ')}>
                                <p className={[classes.page_left]}>Posts: {this.state.media}</p>
                                <p className={[classes.page_left]}>Follows: {this.state.follows}</p>
                                <p className={[classes.page_left]}>Followed by: {this.state.followed_by}</p>
                            </div>
                            <p className={[classes.user_full_name, classes.no_margin].join(' ')} >{this.state.full_name}
                                <Button variant="fab" color="secondary" aria-label="Edit" className={[classes.button, classes.page_right].join(' ')} onClick={this.openHandler}>
                                    <EditIcon></EditIcon>
                                </Button>
                            </p>
                        </div>
                    </div>
                    <div className={[classes.container].join(' ')}>
                        <GridList cellHeight="570" cols={3}>
                            {this.state.uploaded_pics.map((image) => (
                                <GridListTile
                                    key={image.id}
                                    onClick={event => this.clickHandler(event, image.id, image.images.standard_resolution.url, image, image.likes)}
                                >
                                    <img src={image.images.standard_resolution.url} alt="Uploaded Images" />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>

                    <Modal open={this.state.open} onClose={this.closeHandler}>
                        <div className={classes.paper}>
                            <Typography variant="h5" id="modal-title">
                                Edit
                            </Typography>
                            <form autoComplete="off">
                                <TextField
                                    required="true"
                                    id="standard-name"
                                    label="Full Name"
                                    className={classes.textField}
                                    defaultValue={this.state.full_name}
                                    value={this.text}
                                    onChange={this.changeHandler}
                                    margin="normal" />
                                <Button type="submit" value="Submit" onClick={this.submitHandler} variant="contained" color="primary" component="span" className={classes.button} >
                                    UPDATE
                                </Button>
                            </form>
                        </div>
                    </Modal>

                    <Modal open={this.state.imgPopup} onClose={this.closePopupHandler}>
                        <div className={classes.bkg_paper}>
                            <div className={classes.img} >
                                <img className={classes.img} src={this.state.currentImg}></img>
                            </div>
                            <div className={classes.data}>
                                <div className={classes.header}>
                                    <Avatar src={this.state.profile_picture} alt="profile" className={classes.headerAvatar} />
                                    <h4 className={classes.right_margin}>{this.state.username}</h4>
                                </div>
                                <div className={classes.comments}>
                                    <p>{this.state.currentCap}</p>
                                    {this.state.comments.map((comment) => (
                                        <p><b>{this.state.username}: </b>{comment}</p>
                                    ))}
                                </div>
                                <div className={classes.commentForm} >
                                    <div className={classes.flex}>
                                        <Button onClick={this.likeHandler}>
                                            <FavoriteIcon color={this.state.likeColor} ></FavoriteIcon>
                                        </Button>
                                        <p>{this.state.likes}</p>
                                    </div>
                                    <form autoComplete="off" className={classes.literalForm}>
                                        <TextField id="comment-field" label="Add a comment" className={classes.textField} onChange={this.changeHandler} value={this.text} />
                                        <Button type="submit" value="Submit" onClick={this.commentSubmit} variant="contained" color="primary" component="span" className={classes.button}>ADD</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
        )
    }
}

export default withStyles(styles)(Profile);