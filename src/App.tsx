import React from 'react';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';

import { useAppSelector} from './redux/hooks';

import {Toaster} from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoute';
import PubliceRoute from './components/PubliceRoute';
import AppDoctor from './pages/AppDoctor';

function App() {
  const{loading} = useAppSelector((state)=>state.alert)
  return (
  <BrowserRouter>
  {
    loading && <div className="spinner-parent">
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  </div>
  }
      
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/login' element={<PubliceRoute><Login/></PubliceRoute>} />
        <Route path='/register' element={<PubliceRoute><Register/></PubliceRoute>} />
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/apply-doctor' element={<ProtectedRoute><AppDoctor/></ProtectedRoute>} />
       </Routes>
  </BrowserRouter>
  );
}

export default App;
