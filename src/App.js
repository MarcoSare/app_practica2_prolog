import {useRef} from 'react';
import {Link, Route, Routes, useParams} from 'react-router-dom'
import React from 'react';
import { createContext, useState } from 'react';
import Login from './views/login';
import { DashBoard } from './views/admin/DashBoard';
import { UsersView } from './views/admin/Users';
import {DashBoardSupport} from './views/support/DashBoard'
import { CompusView } from './views/admin/Computers';
import { DepasView } from './views/admin/Depas';
import { QrView } from './views/admin/Qr';
import { PendeView } from './views/support/Pendientes';
import { CompleView } from './views/support/Completados';

function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/admin/dashBoard' element={<DashBoard/>}/>
     <Route path='/admin/users' element={<UsersView/>}/>
     <Route path='/admin/compus' element={<CompusView/>}/>
     <Route path='/admin/depas' element={<DepasView/>}/>
     <Route path='/admin/report' element={<QrView/>}/>

     <Route path='/support/dashBoard' element={<DashBoardSupport/>}/>
     <Route path='/support/pendientes' element={<PendeView/>}/>
     <Route path='/support/completados' element={<CompleView/>}/>

     </Routes>
    </>
  );
}

export default App;
