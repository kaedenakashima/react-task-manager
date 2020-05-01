import React, { useState } from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import { FaSignInAlt } from 'react-icons/fa'
import TabsButton from './TabsButton'
import { login } from './utils'
import { setSeconds } from 'date-fns'

export default function LoginForm() {
  const showPassword = false

  return (
    <form style={{ display: 'inline-grid' }}>
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
        type={showPassword ? 'text' : 'password'}
        className='inputField'
        placeholder='Password'
      />
      <div>
        <label>
          <input
            className='passwordCheckbox'
            type='checkbox'
            defaultChecked={showPassword}
            onChange={() => {
              setShowPassword(!showPassword)
            }}
          />{" "}
          show password
        </label>
      </div>
      <TabsButton>
        <span>Login</span>
      </TabsButton>
    </form>
  )
}
