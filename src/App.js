
import './App.css';
import {Route, Routes} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import {SignIn} from './pages/signin-signup/SignIn'
import {SignUp} from './pages/signin-signup/SignUp'
import { Home } from './pages/home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { VerifyAdmin } from "./pages/verifyEmail/VerifyAdmin";
import { Dashboard } from './pages/dashboard/Dashboard';
import { Category } from './pages/category/Category';
import { Product } from './pages/product/Product';
import { PaymentOption } from './pages/payment-option/PaymentOption';
import { Order } from './pages/order/Order';
import { Customer } from './pages/customer/Customer';
import { AdminUser } from './pages/admin-user/AdminUser';
import { Profile } from './pages/profile/Profile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoryAction } from './pages/category/categoryAction';
import { PrivateRoute } from './components/private/PrivateRoute';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryAction())
  }, [dispatch])

  return (
    <div>
      <Routes>
        {/* publice route */}
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<SignIn />} />
        <Route path='/admin-verification' element={<VerifyAdmin />} />

        {/* Private router */}
        <Route path='/new-admin' element={<PrivateRoute><SignUp /></PrivateRoute> } />
        <Route path='/dashboard' element= {<PrivateRoute><Dashboard /> </PrivateRoute> } />
        <Route path='/category' element={<PrivateRoute><Category /> </PrivateRoute>} />
        <Route path='/product' element={<PrivateRoute><Product /> </PrivateRoute>} />
        <Route path='/payment-option' element={<PrivateRoute><PaymentOption /> </PrivateRoute>} />
        <Route path='/order' element={<PrivateRoute><Order /> </PrivateRoute>} />
        <Route path='/customer' element={<PrivateRoute><Customer /> </PrivateRoute>} />
        <Route path='/admin-user' element={<PrivateRoute><AdminUser /> </PrivateRoute>} />
        <Route path='/profile' element={<PrivateRoute><Profile /> </PrivateRoute>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;


