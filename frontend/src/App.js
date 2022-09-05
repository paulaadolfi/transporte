import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Header from './Components/layout/Header';
import Nav from './Components/layout/Nav';
import Footer from './Components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/nosotros' element={<NosotrosPage/>}/>
          <Route path='/novedades' element={<NovedadesPage/>}/>
          <Route path='/contacto' element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter> 
      <Footer/>
    </div>
  );
}

export default App;
