import React from 'react'
import Settings from './Settings'
import Main from './Main'
import Heroes from './Heroes'
import Watch from './Watch'
import Danya from './Danya'
import '../css/Header.css'
import menuLogo from '../../img/menu-logo.png'



class Header extends React.Component{

    constructor(){
        super();
        this.state= {
            action: 'Some act',
            settings: false,
            main: true,
            heroes: false,
            watch: false,
            learn: false,
            danya: false
        }
    }

    onClick(e){
        const {id, className} = e.target;
        const name = id ? id : className;
        this.elementChoose(name)
    }

    elementChoose(eName){
        console.log(eName)
        switch (eName) {
            case 'fa fa-cog': this.setState({settings: true, main: false, heroes: false, watch: false, learn: false, danya: false});
            break;

            case 'menuLogo': this.setState({settings: false, main: true, heroes: false, watch: false, learn: false, danya: false});
            break;

            case 'heroes': this.setState({settings: false, main: false, heroes: true, watch: false, learn: false, danya: false});
            break;

            case 'watch': this.setState({settings: false, main: false, heroes: false, watch: true, learn: false, danya: false});
            break;

            case 'learn': this.setState({settings: false, main: false, heroes: false, watch: false, learn: true, danya: false});
            break;

            case 'danya': this.setState({settings: false, main: false, heroes: false, watch: false, learn: false, danya: true});
            break;

            default: this.setState({settings: false, main: false, heroes: false, watch: false, learn: false, danya: false});
        }
    }

    render() {
        return (
            <div>
                <div className="Header">
                    <div>
                        <ul className="Header-navigationMenu">
                            <li><a onClick={this.onClick.bind(this)} className="fa fa-cog"/></li>
                            <li ><a onClick={this.onClick.bind(this)} className="fa fa-caret-left"/></li>
                            <li ><a onClick={this.onClick.bind(this)} className="fa fa-caret-right"/></li>
                            <li><a onClick={this.onClick.bind(this)} className="menu"><img className="menuLogo" src={menuLogo} alt="menu"/></a></li>
                            <li><a onClick={this.onClick.bind(this)} id="heroes">HEROES</a></li>
                            <li><a onClick={this.onClick.bind(this)} id="watch">WATCH</a></li>
                            <li><a onClick={this.onClick.bind(this)} id="learn">LEARN</a></li>
                            <li><a onClick={this.onClick.bind(this)} id="danya">DANYA</a></li>
                            <div className="right">
                                <li><a onClick={this.onClick.bind(this)} className="fa fa-envelope"/></li>
                                <li><a onClick={this.onClick.bind(this)} className="fa fa-power-off"/></li>
                            </div>
                        </ul>
                    </div>
                </div>

                {this.state.settings ? <Settings/> : ''}
                {this.state.main ? <Main/> : ''}
                {this.state.heroes ? <Heroes/> : ''}
                {this.state.watch ? <Watch/> : ''}
                {this.state.danya ? <Danya/> : ''}
            </div>
        )
    }
}

export default Header