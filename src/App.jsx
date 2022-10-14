import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import Home from "./Home";
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes >
      <Route path='/' element={<><Nav /><Footer /></>}>
        <Route index element={<Home />}/>
        <Route path='products' element={<div>Products Page</div>}/>
        <Route path='about' element={<div>About Page</div>}/>
        <Route path='contact' element={ <Contact /> }/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
