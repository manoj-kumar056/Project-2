import  {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import New from './components/New';
import Most from './components/Most';
import Product from './components/Product';
import Order from './components/Order';
import User from './components/User';
import UserDet from './components/UserDet';
import { Signup } from './components/Signup';
import Login from './components/Login';
import { Auth } from './components/Auth';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Auth>
    <Navbar/> 
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/users' element={<User/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}>
    <Route path=':userId' element={<UserDet/>}/>
    </Route>

    <Route path='/product' element={<Product/>}>
    <Route path='mostview' element={<Most/>}/>
    <Route path='new' element={<New/>}/>
    </Route>
   
    <Route path='*' element={<NoMatch/>} /> 
    </Routes>
    </Auth>
    </div>
  );
}

export default App;
