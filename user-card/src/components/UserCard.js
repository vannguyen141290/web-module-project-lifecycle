import React from 'react';
import api from './api';
import Followers from './Followers';
import UserCardForm from './UserForm';
import Avatar from './Avatar';
import Followings from './Followings'
import '../index.css';

class UserCard extends React.Component {
    state = {
        userdata: {},
        expandFollower: false,
        expandFollowing: false,
        followersData: {},
        followingData: {}
    }

    componentDidMount() {
        api.getUserData(this.props.username)
            .then(res => {
                this.setState({
                    ...this.state,
                    userdata: res.data
                })
            })
            .catch(err => console.log(err))

        api.getFollowersData(this.props.username)
            .then(res => {
                this.setState({
                    ...this.setState,
                    followersData: res.data
                })
            })
            .catch(err => console.log(err))

        api.getFollowingData(this.props.username)
            .then(res => {
                this.setState({
                    ...this.setState,
                    followingData: res.data
                })
            })
            .catch(err => console.log(err))
    }

    handleClickFollower = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            expandFollower: !this.state.expandFollower})
    }

    handleClickFollowing = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            expandFollowing: !this.state.expandFollowing})
    }

    render() {
        const { login, bio, followers, following, location, name, html_url, avatar_url } = this.state.userdata;
        const { expandFollower, expandFollowing } = this.state;
        return (
            <div className='card'>
                <Avatar avatar_url={avatar_url} />
                <div className='info-container'>
                    <UserCardForm
                        login={login}
                        bio={bio}
                        location={location}
                        name={name}
                        url={html_url}
                    />
                    <div>Followers: {followers}<span><button onClick={this.handleClickFollower}>{expandFollower ? 'close' : 'see details'}</button></span></div>
                    {expandFollower &&
                        <Followers {...this.props} followers={this.state.followersData} />
                    }
                    <div>Following: {following}<span><button onClick={this.handleClickFollowing}>{expandFollowing ? 'close' : 'see details'}</button></span></div>
                    {expandFollowing &&
                        <Followings {...this.props} followings={this.state.followingData} />
                    }
                </div>
            </div>

        )
    }
}

export default UserCard;