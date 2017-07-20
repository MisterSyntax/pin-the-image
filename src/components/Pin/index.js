import React from 'react' 
import './pin.css'

export default class Pin extends React.Component {
    constructor(props){
        super(props)
        this.handleRemovePin = this.handleRemovePin.bind(this)
    }
    handleRemovePin(evt, id){
        evt.stopPropagation();
        this.props.removePin(id)
    }
    render(){
        return (
            <div onClick={(evt)=>this.handleRemovePin(evt, this.props.pin.id)} className="pin" style={{top:this.props.pin.top, left:this.props.pin.left}}>+</div>
        )
    }
}