import './App.css';
import Footer from './components/Footer';
import Navs from './components/Navs';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Productlist from './components/Productlist';
import UpdateProduct from './components/UpdateProduct';

const App=()=>{
  return (
    <div>
     <BrowserRouter>
     <Navs/>
          <Routes>
          <Route element={<PrivateComponent/>}>
          <Route element={<Productlist/>} path="/"/>
          <Route element={<AddProduct/>} path="/Add"/>
          <Route element={<UpdateProduct/>} path="/Update/:id"/>
          <Route element={<h1>Logout Confirm</h1>} path="/Logout"/>
          <Route element={<h1>Profile Seen</h1>} path="/Profile"/>
          </Route>
          <Route element={<SignUp/>} path="/signup"/>
          <Route element={<Login/>} path="/login"/>
        </Routes>
     </BrowserRouter>  
     <Footer/> 
    </div>
  );
}

export default App;
