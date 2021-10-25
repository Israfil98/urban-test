import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setLoginAC } from '../../state/loginPageReducer'

const MainPage = () => {
    const history = useHistory()

    const dispatch = useDispatch()

    const login = useSelector((state) => state.loginPage.login)

    const [password, setPassword] = React.useState('')
    const [isDisabled, setIsDisabled] = React.useState(true)

    React.useEffect(() => {
        if (login === 'developer21' && password === '123456') {
            setIsDisabled(false)
        }
    }, [login, password])

    const onLoginValueChange = (e) => {
        dispatch(setLoginAC(e.currentTarget.value))
    }

    const onPasswordValueChange = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onLoginClick = () => {
        history.push('/profile')
    }

    return (
        <div className="container">
            <label htmlFor="login">Введите логин</label>
            <input type="text" required name="login" value={login} onChange={onLoginValueChange} />
            <label htmlFor="password">Введите пароль</label>
            <input type="password" required name="password" value={password} onChange={onPasswordValueChange} />
            <button disabled={isDisabled} type="button" onClick={onLoginClick}>
                Войти
            </button>
        </div>
    )
}

export default MainPage
