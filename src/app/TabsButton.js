import React from 'react'

export default function TabsButton({ children }) {
    return (
        <button className='tabsButton icon_button cta' type='submit'>
            {children}
        </button>
    )
}