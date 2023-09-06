import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from "./components/header";
import Footer from "./components/footer";
import List from './list/list';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='app'>
    <Header/>

    <div className='app-body'>
      
      <List />
    
    </div>

    <div className='footer-body'>
    <Footer/>
      
    </div>
    

  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

