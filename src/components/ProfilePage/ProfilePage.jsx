import React from 'react'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const login = useSelector((state) => state.loginPage.login)

    return <div>{login}</div>
}

export default ProfilePage
