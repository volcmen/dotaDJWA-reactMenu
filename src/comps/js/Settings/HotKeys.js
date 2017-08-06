import React from 'react'

import '../../css/Settings/HotKeys.css'


class HotKeys extends React.Component {

    constructor() {
        super();
        this.state = {
            spellButtons: {
                spellBTN_1: 'Q',
                spellBTN_2: 'W',
                spellBTN_3: 'E',
                spellBTN_4: 'D',
                spellBTN_5: 'F',
                spellBTN_U: 'R'
            },
            itemButtons: {
                itemBTN_1: 'Z',
                itemBTN_2: 'X',
                itemBTN_3: 'C',
                itemBTN_4: 'V',
                itemBTN_5: 'B',
                itemBTN_6: 'N',
            }
        };
        this.Update= this.Update.bind(this)
    }

    Update(e) {
        console.log('e', e);
        console.log('target ID:', e.target.id);
        console.log('Key :', e.key);


        this.setState({spellBTN_1: e.key})
    }



    render() {
        return (
            <div className="HotKeys">
                <div className="HotKeys-ItemsSpells">
                    <div className="HotKeys-ItemsSpells-Abilities">
                        <div className="HotKeys-ItemsSpells-Abilities-Title">
                            <span>ABILITIES</span>
                            <input type="checkbox" value='CheckBox'/><label>UNIT SPECIFIC HOTKEYS</label>
                        </div>
                        <fieldset className="spellsMapping">
                            <button><input id="spellBTN_1" className="Key-Input" onKeyPress={this.Update} value={this.state.spellButtons.spellBTN_1}/></button>
                            <button>{this.state.spellButtons.spellBTN_2}</button>
                            <button>{this.state.spellButtons.spellBTN_3}</button>
                            <button>{this.state.spellButtons.spellBTN_4}</button>
                            <button>{this.state.spellButtons.spellBTN_5}</button>
                            <button>{this.state.spellButtons.spellBTN_U}</button>
                            <div>
                                <input type="checkbox" value='QuickCast_spells'/><label>ENABLE QUICK CAST</label>
                            </div>
                        </fieldset>
                    </div>

                    <div className="HotKeys-ItemsSpells-Items">
                        <p>ITEMS</p>
                        <button>{this.state.itemButtons.itemBTN_1}</button>
                        <button>{this.state.itemButtons.itemBTN_2}</button>
                        <button>{this.state.itemButtons.itemBTN_3}</button>
                        <button>{this.state.itemButtons.itemBTN_4}</button>
                        <button>{this.state.itemButtons.itemBTN_5}</button>
                        <button>{this.state.itemButtons.itemBTN_6}</button>
                        <div className="HotKeys-ItemsSpells-Items-divInp">
                            <input type="checkbox" value='QuickCast_items'/><label>ENABLE QUICK CAST</label>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default HotKeys