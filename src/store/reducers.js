/**
 * @desc: Manage every key in the initialState.json file
 * @return: A combined reducer that has the same structure as the initialState
 */

import C from '../constants.js'
import { combineReducers } from 'redux'

//TODO: Remove/Replace Sample reducer
export const pins = (state = [], action) => {
    switch (action.type) {
        case C.ADD_PIN: {
            return [...state, action.payload]
        }
        case C.REMOVE_PIN: {
            return state.filter((curr) => curr.id !== action.payload)
        }
        default: {
            return state
        }
    }
}

export const images = (state = [], action) => {
    switch (action.type) {
        case C.ADD_PIC: {
            return [...state, action.payload]
        }
        case C.REMOVE_PIC: {
            return state.filter((curr) => curr.id !== action.payload)
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    pins,
    images
})