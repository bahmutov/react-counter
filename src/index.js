import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Example } from './Example'
import FunCounter from './FunCounter'

ReactDOM.render(
  <React.StrictMode>
    <h1>React class component</h1>
    <Example initialCount={0} />
    <h2>Function component</h2>
    <FunCounter initialCount={7} something="else" />
  </React.StrictMode>,
  document.getElementById('root'),
)
