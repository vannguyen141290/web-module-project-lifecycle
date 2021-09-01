import React from 'react';
import Avatar from './Avatar';
import '../index.css'

class Following extends React.Component {



    render() {
        const { avatar_url, login, html_url } = this.props.following;
        return (
            <div className='following-card'>
                <Avatar
                    avatar_url={avatar_url}
                />
                <div>
                    <h3>Username: {login}</h3>
                    <div>Profile: <a href={html_url} style={{ textDecoration: 'none', color: 'inherit' }}>{html_url}</a></div>
                </div>

            </div>
        )
    }
}

export default Following;