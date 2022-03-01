import { useReducer } from 'react'
import menuContext from './menuContext'
import menuReducer from './menuReducer'

import { STATE_MENU } from '../types'

const menuState = ({ children }) => {

    const initialState = {
        estadoMenu: false
    }

    const [ state, dispatch ] = useReducer( menuReducer, initialState )

    const abrirCerrarMenu = ( valorMenu ) => {
        dispatch({
            type: STATE_MENU,
            payload: valorMenu
        })
    }

    return(
        <menuContext.Provider
            value={{
                estadoMenu: state.estadoMenu,
                abrirCerrarMenu
            }}
        >
            { children }
        </menuContext.Provider>
    )
}

export default menuState