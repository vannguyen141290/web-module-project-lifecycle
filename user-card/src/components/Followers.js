import React from 'react';
import Follower from './Follower';
import '../index.css'

class Followers extends React.Component {

    render() {
        const { followers } = this.props;
        return (
            <div className='followers-wrapper'>
                {followers.map(follower => {
                    return <Follower key={follower.id} follower={follower}/>
                })}
            </div>
        )
    }
}

export default Followers;

