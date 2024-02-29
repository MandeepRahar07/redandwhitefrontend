import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import Contextapi from './ContextApi/Contextapi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contextapi>

   <BrowserRouter>
  <ChakraProvider>
  <App />
</ChakraProvider>,
   </BrowserRouter>
  </Contextapi>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
