import React from 'react'
import '../css/Main.css'

import avatar from '../../img/Avatar.jpg'

import column1 from '../../img/col 1.jpeg'
import column2 from '../../img/col 2.png'
import column3 from '../../img/col 3.jpg'
import column4 from '../../img/col 4.jpg'
import column5 from '../../img/col 5.jpg'
import column6 from '../../img/col 6.jpg'


import hero1 from '../../img/heroes/hero1.gif'
import hero2 from '../../img/heroes/hero2.gif'
import hero3 from '../../img/heroes/hero3.gif'

import friends from '../../img/noFriens.jpg'

const Main = () => {
    return (
        <div className="Main">

            <div className="Main-left-block">
                <div className="Main-left-block_first">
                    <h1>Nameless <img src={avatar}/></h1>

                    <h4>Top heroes</h4>
                    <div>
                        <img src={hero1}/>
                        <img src={hero2}/>
                        <img src={hero3}/>
                    </div>
                </div>
                <div className="Main-left-block_second">
                    <h2>Friends</h2>
                    <p>No friens</p>
                    <img src={friends}/>
                </div>
            </div>


            <div className="Main-center-blocks">
                <div className="Main-center-blocks-top">
                    <div className="Main-center-blocks-columns">
                        <img src={column1}/>
                    </div>
                    <div className="Main-center-blocks-columns">
                        <img src={column2}/>
                    </div>
                    <div className="Main-center-blocks-columns">
                        <img src={column3}/>
                    </div>
                </div>

                <div className="Main-center-blocks-bot">
                    <div className="Main-center-blocks-columns">
                        <img src={column4}/>
                    </div>
                    <div className="Main-center-blocks-columns">
                        <img src={column5}/>
                    </div>
                    <div className="Main-center-blocks-columns">
                        <img src={column6}/>
                    </div>
                </div>
            </div>


            <div className="Main-Bottom-block">
                <div className="Main-Bottom-block-chat">
                    <textarea>f34f</textarea>
                </div>

                <div className="Main-Bottom-block-right">
                    <img src={column6}/>
                </div>
            </div>


        </div>
    )
};

export default Main