import React from 'react'

import '../../css/Settings/Audio.css'

class Audio extends React.Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = {
            masterVolume: 100,
            gameSounds: 100,
            music: 100,
            voices: 100,
            unitSpeech: 100
        }
    }


    onChange(event) {
        const targetId = event.target.id;
        this.setState({[targetId]: event.target.value})
    }

    render() {
        return (
            <div className="Audio">
                <div className="Audio-Slides">
                    <h2>VOLUME</h2>
                    <span>Master Volume  {this.state.masterVolume}% </span>
                    <input type="range" id="masterVolume" value={this.state.masterVolume} min={0} max={100} step={1} onChange={this.onChange}/><br/>
                    <span>Game Sounds  {this.state.gameSounds}% </span>
                    <input type="range" id="gameSounds" value={this.state.gameSounds} min={0} max={100} step={1} onChange={this.onChange}/><br/>
                    <span>Game Sounds  {this.state.music}% </span>
                    <input type="range" id="music" value={this.state.music} min={0} max={100} step={1} onChange={this.onChange}/><br/>
                    <span>Game Sounds  {this.state.voices}% </span>
                    <input type="range" id="voices" value={this.state.voices} min={0} max={100} step={1} onChange={this.onChange}/><br/>
                    <span>Game Sounds  {this.state.unitSpeech}% </span>
                    <input type="range" id="unitSpeech" value={this.state.unitSpeech} min={0} max={100} step={1} onChange={this.onChange}/><br/>
                </div>
            </div>
        )
    }
}

export default Audio