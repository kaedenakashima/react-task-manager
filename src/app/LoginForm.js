import React, { useState } from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import { FaSignInAlt } from 'react-icons/fa'
import TabsButton from './TabsButton'
import { login } from './utils'

export default function LoginForm() {
    return (
        <form>
            <VisuallyHidden>
                <label htmlFor='login:email'>Email:</label>
            </VisuallyHidden>
            <input
                type='text'
                id='login:email'
                className='inputField'
                placeholder='youremailaddress@example.com'
            />
            <VisuallyHidden>
                <label htmlFor='login:password'>Password:</label>
            </VisuallyHidden>
            <input
                id='login:password'
                className='inputField'
                placeholder='Password'
            />
            <div>
                <label>
                    <input
                        className='passwordCheckbox'
                        type='checkbox'
                        defaultChecked={false}
                    />{" "}
                </label>
            </div>
            <TabsButton>
                <span>Login</span>
            </TabsButton>
        </form>
    )
}
