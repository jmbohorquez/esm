import { useReducer } from 'react'
import contactContext from './contactContext'
import contactReducer from './contactReducer'

import { CONTACTO_VISIBLE } from '../types'

const contactState = ({ children }) => {
    
    const initialState = {
        contactVisible: false
    }

    const [ state, dispatch ] = useReducer( contactReducer, initialState )

    const mostrarOcultarContacto = ( showContactValue ) => {
        dispatch({
            type: CONTACTO_VISIBLE,
            payload: showContactValue
        })
    }
    
    return(
        <contactContext.Provider
            value={{
                contactVisible: state.contactVisible,
                mostrarOcultarContacto
            }}
        >
            { children }
        </contactContext.Provider>
    )
}

export default contactState