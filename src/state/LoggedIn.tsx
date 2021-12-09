import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoogedIn] = useState(false);

    const handleLogin = () => {
        setIsLoogedIn(true)
    }
    const handledLogout = () => {
        setIsLoogedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handledLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
} 