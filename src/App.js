import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddItem from './Pages/AddItem/AddItem';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItems from './Pages/ManageItems/ManageItems';
import Order from './Pages/Order/Order';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AllItems from './Pages/AllItems/AllItems';
import MyItems from './Pages/MyItems/MyItems';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={<ItemDetail></ItemDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/AllItems" element={<AllItems></AllItems>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout/:itemId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/AddItem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path="/MyItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        {/* <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
      <Toaster />
    </div>
  );
}

export default App;
