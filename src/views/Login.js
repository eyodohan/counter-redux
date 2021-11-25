import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../stores/auth"
import { useHistory } from 'react-router'

const Login = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const handleLogin = () => {
        // istek gelince
        // data..
        const dummyData = {
            id:1,
            name:"Tayfun",
            token:"qe24242"
        }
        dispatch(login(dummyData))
        history.push("/")
    }

    return (
        <div style={{background:"lightblue"}}>
            <h3>Giriş Yap</h3>
            <button onClick={handleLogin}>Giriş Yapmak için tıkla</button>
        </div>
    )
}

export default Login
