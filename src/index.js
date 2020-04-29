import "./app/App.css"
import "./index.css"
import './styles.css'

import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import { FaMinus, FaPlus } from 'react-icons/fa'

// just JavaScript
const text = 'Add'

const CTAButton = props => (
  <button
    onKeyDown={(event) => {
      if (
        event.key === 'Enter' ||
        event.key === ' '
      ) {
        props.onKeyboardClick()
      }
    }}
    className='icon_button cta'
  >
    {props.children}
  </button>
)

React.createElement('button', {
  children: 'children'
})

const domElement = document.getElementById('root')

ReactDOM.render(
  <div>
    <CTAButton onClick={() => {
      console.log('clicked!')
    }}>
      <FaMinus /> Subtract
    </CTAButton>
    <CTAButton>
      <FaPlus /> Add
    </CTAButton>
  </div>,
  domElement
)

// import "./app/App.css"
// import "./index.css"
// import './styles.css'


// import ReactDOM from "react-dom"
// import React from 'react'
// import {
//   Tabs,
//   TabList,
//   Tab,
//   TabPanels,
//   TabPanel
// } from '@reach/tabs'
// import LoginForm from './app/LoginForm'
// import SignupForm from './app/SignupForm'
// // import About from 'app/About'

// export default function LoggedOut() {
//   return (
//     <div>
//       <h1>aaaa</h1>
//       <div className='LoggedOut'>

//         {/* <About /> */}
//         {/* <Tabs>
//         <TabList>
//           <Tab>Login</Tab>
//           <Tab>Signup</Tab>
//         </TabList>
//         <TabPanels>
//           <TabPanel>
//             <LoginForm />
//           </TabPanel>
//           <TabPanel>
//             <SignupForm />
//           </TabPanel>
//         </TabPanels>
//       </Tabs> */}
//       </div>
//     </div>
//   )
// }

// const domElement = document.getElementById('root')

// ReactDOM.render(
//   <div className='LoggedOut'>
//     <Tabs>
//       <TabList>
//         <Tab>Login</Tab>
//         <Tab>Signup</Tab>
//       </TabList>
//       <TabPanels>
//         <TabPanel>
//           <LoginForm />
//         </TabPanel>
//         <TabPanel>
//           <SignupForm />
//         </TabPanel>
//       </TabPanels>
//     </Tabs>
//   </div>,
//   domElement
// )