//react is library

//import React from '../node_modules/@ampproject/remapping/package.json'relative path
import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './Pages/home/App'
import './index.css'
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(//react dom converted to real dom
    <>   
      <App/>
    </>
    
)