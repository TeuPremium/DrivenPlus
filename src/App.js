import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Routes/Login';

import GlobalStyle from './Styles/GlobalStyle'

import Cadastro from './Components/Routes/SignUp';
import Subscriptions from './Components/Routes/Subscriptions/Subscriptions';

function App() {
 


  

  return (
 
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
          
            <Route path='/' element={<Login/>}/>
            <Route path='/sign-up' element={<Cadastro/>}/>
            <Route path='/subscriptions' element={<Subscriptions/>}/>
         
           
      </Routes>
    </BrowserRouter>
  );
}

export default App;
