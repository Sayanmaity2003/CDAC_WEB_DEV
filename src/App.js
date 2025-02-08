// import logo from './logo.svg';
import './App.css';
import {Home} from './pages/Home/Home'
import {Login} from './pages/Login/Login'
import {Registration} from './pages/Registration/Registration'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {DefaultLayout} from './layouts/DefaultLayout';
import {About} from './pages/About/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/' element={<DefaultLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
