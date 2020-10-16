import React from 'react';
import Box from './components/Box/box'
import './BoxService.css'
import {MdHighQuality} from 'react-icons/md'

export default function BoxService(){
    return (
        <div className="mb-2 box-size">
            <Box
                class=" col-lg-3 background-yellow"
                icon={<MdHighQuality className="highQuality" />}
                title="Primeiro titulo"
                text="este é meu primeiro titulo do box"
                textColor="black"
            />
            <Box 
                class=" col-lg-3 background-black"
                icon={<MdHighQuality className="highQuality" />}
                title="Primeiro titulo"
                text="este é meu primeiro titulo do box"
                textColor="white"
            />
            <Box 
                class=" col-lg-3 background-yellow"
                icon={<MdHighQuality className="highQuality" />}
                title="Primeiro titulo"
                text="este é meu primeiro titulo do box"
                textColor="black"
            />
        </div>
    )
}