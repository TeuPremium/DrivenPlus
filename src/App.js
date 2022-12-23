import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Routes/Login';

import GlobalStyle from './Styles/GlobalStyle'

import Cadastro from './Components/Routes/SignUp';
import Subscriptions from './Components/Routes/Subscriptions/Subscriptions';
import SubscriptionCheckout from './Components/Routes/Subscriptions/SubscriptionCheckout';
import Fail from './Components/CommonAssets/Fail';

function App() {
 


  

  return (
 
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
          
            <Route path='/' element={<Login/>}/>
            <Route path='/sign-up' element={<Cadastro/>}/>
            <Route path='/subscriptions' element={<Subscriptions/>}/>
            <Route path='/subscriptions/:id' element={<SubscriptionCheckout/>}/>
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
