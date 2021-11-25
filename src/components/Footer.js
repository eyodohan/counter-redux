import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode, setLanguage } from '../stores/site'
import { logout } from "../stores/auth"


const Footer = () => {

    const {dark, language} = useSelector(state => state.site)
    const languages = ["tr", "en"]
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const handleLanguage = lang => {
     dispatch(setLanguage(lang))
    }

    return (
        <div>
            footer
            <div>
                {languages.map((lang, index) => (
                    <button className={lang === language ? "active" : ""} key={index} onClick={() => handleLanguage(lang)}>{lang}</button>
                ))}
            </div>
            <div>
                <button onClick={() => dispatch(setDarkMode())}>
                    {dark ? "Light Moda geç" : "Dark moda geç"}
                </button>
            </div>
            {user && (
                <div>
                    <button onClick={()=> dispatch(logout())}>Çıkış Yap</button>
                </div>
            )}
        </div>
        
    )
}

export default Footer 