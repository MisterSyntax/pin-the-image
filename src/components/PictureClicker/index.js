import React from 'react'
import './pictureClicker.css'

import Pin from '../Pin/'

export default class PictureClicker extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleClicks = this.handleClicks.bind(this)
 
    }

    handleClicks(evt){
        var parent = evt.target.getBoundingClientRect();
        this.props.onAddPin({
            imgId: this.props.imgId,
            top: evt.pageY - (parent.top+ window.scrollY),
            left: evt.pageX - (parent.left+window.scrollX) 
        })
    }

    render() {
        return (
        <div className='picture-clicker-container' onClick={(event)=>this.handleClicks(event)}>
            <img className='clicker-image' src={`/img/${this.props.imgName}`}/>
            {this.props.pins.map((pin)=><Pin pin={pin} key={pin.id} removePin={this.props.onRemovePin}/>)}
            
        </div>)
    }
}