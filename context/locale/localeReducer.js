/* eslint-disable import/no-anonymous-default-export */

import { CURRENT_LOCALE } from '../types'

export default ( state, action ) => {
    switch ( action.type ) {
        case CURRENT_LOCALE:
            return {
                ...state,
                currentLocaleState: action.payload
            }
    
        default:
            return state
    }
}