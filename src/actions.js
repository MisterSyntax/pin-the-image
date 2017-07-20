/**
 * @desc: This file holds the action creators which dispatch actions, and non-reducer functions(e.g.)
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 * @TODO: remove default enable/disable
 */
import C from "./constants"

export const addPic = (fileName) => {
    let id = new Date().getTime()
    return {
        type: C.ADD_PIC,
        payload: {
            fileName,
            id
        }
    }
}

export const removePic = (id) => {
    return {
        type: C.REMOVE_PIC,
        payload: id
    }
}

export const addPin = ({imgId, top, left}) => {
    let id = new Date().getTime()
    return {
        type: C.ADD_PIN,
        payload: {
            imgId,
            top,
            left,
            id
        }
    }
}

export const removePin = (id) => {
    return {
        type: C.REMOVE_PIN,
        payload: id
    }
}