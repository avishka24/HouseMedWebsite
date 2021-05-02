import React from 'react';
import ReactDOM from 'react-dom';
import Routerr from "./Routerr";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
// import Footer from "./Components/Footer";

ReactDOM.render(
  <>
    <BrowserRouter><Routerr/></BrowserRouter>
  </>,
  document.getElementById('root')
);
