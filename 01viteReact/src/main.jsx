import React from "react";
import ReactDOM from "react-dom/client"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myApp() {
    return(
        <div>
          <h1>Custom App</h1>
        </div>
    )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Ajay";

const ReactElement = React.createElement(
    'a',
    {
      href: 'https://google.com',
      target: '_blank'
    },
    'Click visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    ReactElement
)
