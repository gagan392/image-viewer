import React, { Component } from 'react';
import SearchAppBar from './../../common/header/SearchAppBar';
import { Card, CardContent } from "@material-ui/core";
import { FormControl, InputLabel, Input, Button, FormHelperText } from "@material-ui/core";
import { Typography, withStyles } from "@material-ui/core";

import './Profile.css';

const styles = () => ({
    contentRoot: {
        'padding': '60px !important'
    },
    formControlRoot: {
        'width': '-webkit-fill-available'
    }
})
class Profile extends Component {

    constructor() {
        super();
        this.state = {
            profile: [],
            posts: []
        }
        this.accessToken = '8661035776.d0fcd39.87fd934e04f84253aaf234d8bd4e4c65';
        this.profileUrl = 'https://api.instagram.com/v1/users/self/';
        this.postsUrl = 'https://api.instagram.com/v1/users/self/media/recent';
        
    }
    
    componentWillMount() {
        let that = this;
        let xhrProfile = new XMLHttpRequest();
        xhrProfile.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let response = JSON.parse(this.responseText);
                
                that.setState({ profile: response.data });
            }

        })


        xhrProfile.open("GET", this.profileUrl + "?access_token=" + this.accessToken);
        xhrProfile.setRequestHeader("Cache-Control", "no-cache");
        xhrProfile.send();



        let xhrPosts = new XMLHttpRequest();
        xhrPosts.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let response = JSON.parse(this.responseText);
                that.setState({ posts: response });
            }
        })

        xhrPosts.open("GET", this.postsUrl + "?access_token=" + this.accessToken);
        xhrPosts.setRequestHeader("Cache-Control", "no-cache");
        xhrPosts.send();

    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div>
                    <SearchAppBar />
                    <p>{this.state.profile.full_name}</p>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Profile);