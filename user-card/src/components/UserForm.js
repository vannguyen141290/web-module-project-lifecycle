import React from 'react';

export default function UserCardForm(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <div style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{props.login}</div>
            <div>Location: {props.location}</div>
            <div>Profile: <a href={props.url} style={{ textDecoration: 'none', color: 'inherit' }}> {props.url} </a></div>
            <div>Bio: {props.bio ? props.bio : 'N/A'}</div>
        </>

    )
}