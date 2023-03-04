import React from 'react'
import { Link } from 'react-router-dom'

export const SignUpForm = () => {

    function requestForSignUp() {

    }

    return (
        <div className='signup-form'>
            <form onSubmit={requestForSignUp}>

                <input type="text" placeholder='User Name' />
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Password' />
                <button type='submit'>Sign up</button>
            </form>
            <div className='already-account'>
                <p>I have an account <Link to="/auth/login">Login</Link></p>
            </div>
        </div>
    )
}

