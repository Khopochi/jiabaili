import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import { Home } from './pages/home/Home';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { ProductView } from './pages/productview/ProductView';
import { Category } from './pages/category/Category';
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register/' element={<Register/>} />
          <Route path='/login/' element={<Login />} />
          <Route path='/viewproduct/' element={<ProductView />} />
          <Route path='/categories/' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
