// import logo from './logo.svg';
import './App.css';
import Login from './login';
import Register from './register';
import Profile from './profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Register' element={<Register />} />
      <Route path='/Profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
