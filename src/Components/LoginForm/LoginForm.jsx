import React from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = () => {

    function requestForLogin() {

    }

    return (
        <div className='login-form'>
            <form onSubmit={requestForLogin}>
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Password' />
                <button type='submit'>Login</button>
            </form>
            <div className='no-account'>
                <p>If you don't have account <Link to="/auth/signup">Sign Up</Link></p>
            </div>
        </div>
    )
}

