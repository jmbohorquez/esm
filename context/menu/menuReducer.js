/* eslint-disable import/no-anonymous-default-export */

import { STATE_MENU } from '../types'

export default ( state, action ) => {

    switch ( action.type ) {
        case STATE_MENU:
            return{
                ...state,
                estadoMenu: action.payload
            }
    
        default:
            return state
    }

}