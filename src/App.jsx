import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import Home from "./Home";

function App() {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />}/>
        <Route path='products' element={<div>Products Page</div>}/>
        <Route path='about' element={<div>About Page</div>}/>
        <Route path='contact' element={ <div> Contact Page</div> }/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
