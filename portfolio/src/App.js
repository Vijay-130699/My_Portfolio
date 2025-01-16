import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Routes = React.lazy(() => import('./routes/routes'))

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer />
    </React.Fragment>
  )
}

export default App