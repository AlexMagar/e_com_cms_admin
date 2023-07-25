
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

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<SignIn />} />
        <Route path='/admin-verification' element={<VerifyAdmin />} />

        {/* Private router */}
        <Route path='/new-admin' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/category' element={<Category />} />
        <Route path='/product' element={<Product />} />
        <Route path='/payment-option' element={<PaymentOption />} />
        <Route path='/order' element={<Order />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/admin-user' element={<AdminUser />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
