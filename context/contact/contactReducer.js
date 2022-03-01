/* eslint-disable import/no-anonymous-default-export */

import { CONTACTO_VISIBLE } from '../types'

export default ( state, action ) => {
    switch ( action.type ) {
        case CONTACTO_VISIBLE:
            return {
                ...state,
                contactVisible: action.payload
            }
    
        default:
            return state
    }
}