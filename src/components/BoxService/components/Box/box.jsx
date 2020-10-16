import React from 'react';
import './box.css'

export default function Box(props){
    return (
        <div className={`d-flex`+ props.class}>
            
                {props.icon}
            
            <div>
                <h1 className={'mx-5 my-4 align-self-center text-'+props.textColor}>{props.title}</h1>
                <p className={'m-2 text-'+props.textColor}>{props.text}</p>
            </div>
        </div>
    )
}