import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Routes/Login';
import { useState } from 'react';
import GlobalStyle from './Styles/GlobalStyle'

import Cadastro from './Components/Routes/SignUp';
import Subscriptions from './Components/Routes/Subscriptions/Subscriptions';
import SubscriptionCheckout from './Components/Routes/Subscriptions/SubscriptionCheckout';
import Fail from './Components/CommonAssets/Fail';
import AuthContext from './Components/Contexts/AuthContext';
import UserContext from './Components/Contexts/UserContext';
import Loading from './Components/CommonAssets/Loading';
import Home from './Components/Routes/Home/Home';

function App() {
 
  const [token, setToken] = useState()
  const [user, setUser] = useState()

  

  return (
    <AuthContext.Provider value={{token, setToken}}>
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            
              <Route path='/' element={<Login/>}/>
              <Route path='/sign-up' element={<Cadastro/>}/>
              <Route path='/subscriptions' element={<Subscriptions/>}/>
              <Route path='/subscriptions/:id' element={<SubscriptionCheckout/>}/>
              <Route path='/home/' element={<Home/>}/>
              
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </AuthContext.Provider>
  );
  
}

export default App;
