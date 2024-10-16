import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import ToasterContext from './context/ToasterContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToasterContext />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
