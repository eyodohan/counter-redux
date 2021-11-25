import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Header = () => {

    const {dark, language} = useSelector(state => state.site)

    return (
        <div>
            header
            <nav>
                <NavLink to="/" exact={true} activeClassName="active">
                    Anasayfa
                </NavLink>
                <NavLink to="/about" exact={true} activeClassName="active">
                    Hakkında
                </NavLink>
                <NavLink to="/profile" exact={true} activeClassName="active">
                    Profile
                </NavLink>
            </nav>
            Dark mod = {dark ? "Evet" : "Hayır"} <br />
            Mevcut dil = {language}
        </div>
    )
}

export default Header
