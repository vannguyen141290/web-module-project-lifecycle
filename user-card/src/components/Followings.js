import React from 'react';
import Following from './Following';
import '../index.css'
class Followings extends React.Component {

    render() {
        const { followings } = this.props;
        return (
            <div className='followings-wrapper'>
                {followings.map((following, index) => {
                    return <Following key={index} following={following}/>
                })}
            </div>
        )
    }

}

export default Followings;

