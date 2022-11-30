import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from "./utils/AppContext";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'react-calendar-timeline/lib/Timeline.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <ChakraProvider>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>
  </div>
)