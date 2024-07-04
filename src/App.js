// import logo from './logo.svg';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Coffee } from './pages/CoffeePage';
import { Menu } from './components/Menu';
import { AuthProvider } from './auth/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { GestionCoffee } from './pages/GestionCoffeePage';
import { Registro } from './pages/RegistroPage';
import { Usuarios } from './pages/Usuarios';
import { AcercaDe } from './pages/AcercaDe';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Coffees" element={<Coffee />}/> 
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Registro' element={<Registro/>}/>
          <Route path='/Acerca-de' element={<AcercaDe/>}/>
          <Route path='/Gestion-coffee' element={<PrivateRoute><GestionCoffee /></PrivateRoute>}/>
          <Route path='/Clientes' element={<PrivateRoute><Usuarios /></PrivateRoute>}/>
          <Route path="*" element={<p>Ups, no existe la ruta</p>}/> 
        </Routes>
      </HashRouter>
    </AuthProvider>

  );
}

export default App;
