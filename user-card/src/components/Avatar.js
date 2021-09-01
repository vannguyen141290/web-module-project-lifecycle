import React from 'react';

export default function Avatar(props) {
    return (
        <div className='avatar'>
            <img
                src={props.avatar_url}
                alt='user-avt'
                width='200px'
                style={{ fontWeight: 'bold' }}
            />
        </div>
    )
}