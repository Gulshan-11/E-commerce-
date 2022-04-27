import NavBar from './components/navbar';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navigate from './components/navigate';

export default function App() {
  return (
      <BrowserRouter>
      <NavBar/>
      <Navigate/>
      </BrowserRouter>
  );
}