import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import localeContext from '../context/locale/localeContext'

const LocalSwitcher = () => {

    const LocaleContext = useContext( localeContext )
    const { currentLocaleState, setCurrentLocale } = LocaleContext

    const router = useRouter()
    const { locales, locale, locale: { activeLocale } } = router
    const otherLocales = locales.filter( locale => locale !== activeLocale )

    useEffect(() => {
        setCurrentLocale( router.locale )
    }, [ locale ])

    return(
        <ul className="header-languaje-menu">
            {
                otherLocales.map( locale => {

                    const { pathname, query, asPath } = router

                    return(
                        <li key={ locale } className={ locale === currentLocaleState && 'current' }>
                            <Link href={{ pathname, query }} as={ asPath } locale={ locale } >
                                <a>{ locale }</a>
                            </Link>
                        </li>
                    )
                } )
            }
        </ul>
    )
}

export default LocalSwitcher