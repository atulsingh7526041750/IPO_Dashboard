import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import LoginForm from './Authentication/LoginForm';
import RegistrationForm from './Authentication/RegistrationForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='*' element={<LoginForm/>}></Route>
        <Route path='/registration' element={<RegistrationForm/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
      
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
