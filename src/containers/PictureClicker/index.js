/**
 * @desc: THis is a sample container for connecting the state with a component
 */

import React from 'react'

//import your component
import PictureClicker from '../../components/PictureClicker/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { addPin, removePin } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        pins: state.pins
    }
)

const mapDispatchToProps = dispatch => {
    return{
        onRemovePin(id){
            dispatch(
                removePin(id)
            )
        },
        onAddPin(pin){
            dispatch(
                addPin(pin)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureClicker)