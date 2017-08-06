import React from 'react'

import HotKeys from './Settings/HotKeys'
import Audio from './Settings/Audio'

import '../css/Settings.css'

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotkeys: true,
            options: false,
            video: false,
            audio: false
        }
    }

    onClick(e){
        const {id, className} = e.target;
        const name = id ? id : className;
        this.elementChoose(name);
        console.log('e', e.target)
    }

    elementChoose(sName){
        switch (sName) {
            case 'hotkeys' : this.setState({hotkeys: true, options: false, video: false, audio: false}); break;
            case 'audio' : this.setState({hotkeys: false, options: false, video: false, audio: true}); break;
        }
    }

    render() {
        return (
            <div className="Settings">
                <div>
                    <ul className="Settings-navigationMenu">
                        <li><a onClick={this.onClick.bind(this)} id="hotkeys">HOTKEYS</a></li>
                        <li><a onClick={this.onClick.bind(this)} id="options">OPTIONS</a></li>
                        <li><a onClick={this.onClick.bind(this)} id="video">VIDEO</a></li>
                        <li><a onClick={this.onClick.bind(this)} id="audio">AUDIO</a></li>
                    </ul>
                </div>
                <div>
                    {this.state.hotkeys && <HotKeys />}
                    {this.state.audio && <Audio />}
                </div>
            </div>
        )
    }

}

export default Settings