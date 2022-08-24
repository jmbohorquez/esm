import { useReducer } from 'react'
import localeContext from './localeContext'
import localeReducer from './localeReducer'

import { CURRENT_LOCALE } from '../types'

const localeState = ({ children }) => {
    
    const initialState = {
        currentLocaleState: 'es'
    }

    const [ state, dispatch ] = useReducer( localeReducer, initialState )

    const setCurrentLocale = ( locale ) => {
        dispatch({
            type: CURRENT_LOCALE,
            payload: locale
        })
    }
    
    return(
        <localeContext.Provider
            value={{
                currentLocaleState: state.currentLocaleState,
                setCurrentLocale
            }}
        >
            { children }
        </localeContext.Provider>
    )
}

export default localeState