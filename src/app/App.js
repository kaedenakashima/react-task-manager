import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from './utils'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import './App.css';

export default function App() {
  const auth = null
  const authAttempted = false

  if (!authAttempted) {
    return <p>Authenticating...</p>
  }

  return (
    <div className="Layout">
      <h1>test</h1>
      {auth ? <LoggedIn auth={auth} /> : <LoggedOut />}
    </div>
  )
}



