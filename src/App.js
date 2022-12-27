import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Routes/Login';
import { useState } from 'react';
import GlobalStyle from './Styles/GlobalStyle'
import Cadastro from './Components/Routes/SignUp';
import Subscriptions from './Components/Routes/Subscriptions/Subscriptions';
import SubscriptionCheckout from './Components/Routes/Subscriptions/SubscriptionCheckout';
import AuthContext from './Components/Contexts/AuthContext';
import UserContext from './Components/Contexts/UserContext';
import Home from './Components/Routes/Home/Home';
import NameContext from './Components/Contexts/NameContext';

function App() {
 
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [name, setName] = useState()


  console.log(user, token)
  return (
    <AuthContext.Provider value={{token, setToken}}>
    <UserContext.Provider value={{user, setUser}}>
    <NameContext.Provider value={{name, setName}}>
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
    </NameContext.Provider>
    </UserContext.Provider>
    </AuthContext.Provider>

  );
  
}

export default App;

