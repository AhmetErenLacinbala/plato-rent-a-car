import { useEffect } from 'react'
import './App.css'

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CommonRoute from './common.route';



function App() {
  return (
    <BrowserRouter>
      <CommonRoute />
    </BrowserRouter>
  );
}


export default App
