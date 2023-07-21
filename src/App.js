
import './App.css';
import {Route, Routes} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import {SignIn} from './pages/signin-signup/SignIn'
import {SignUp} from './pages/signin-signup/SignUp'
import { Home } from './pages/home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCmsAction } from "./pages/cms/cmsAction";

function App() {

  const dispatch = useDispatch();

  //fetch the cms
  useEffect(() =>{
    dispatch(fetchCmsAction());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<SignIn />} />

        {/* Private router */}
        <Route path='/new-admin' element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
