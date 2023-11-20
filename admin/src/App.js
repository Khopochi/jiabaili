import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/home/Home';
import { AddProduct } from './pages/addproduct/AddProduct';
import { Addpage } from './pages/addpage/Addpage';
import { Barcode } from './pages/barcode/Barcode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/addproduct/' element={<AddProduct/>} />
            <Route path='/addproduct/addpage/' element={<Addpage/>} />
            <Route path='/addproduct/scan/' element={<Barcode/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
