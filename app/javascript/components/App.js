import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Greeting />} />
            <Route path="/greet" element={<Greeting greeting= {'hello'} />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App
