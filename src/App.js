import {useRef} from 'react';
import {Link, Route, Routes, useParams} from 'react-router-dom'
import React from 'react';
import { createContext, useState } from 'react';
import Login from './views/login';
import { DashBoard } from './views/admin/DashBoard';

function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<DashBoard/>}/>
     </Routes>
    </>
  );
}

export default App;
