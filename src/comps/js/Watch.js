import React from 'react'

import '../css/Watch.css'


const video = '//www.youtube.com/embed/00ODyjOgmWk';

const Watch = () => {
    return (
        <div className="Watch">
            <iframe width="1024" height="700" src={video}/>
        </div>
    )
}

export default Watch