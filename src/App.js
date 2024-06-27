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

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Coffees" element={<Coffee />}/> 
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/Gestion-coffee' element={<PrivateRoute><GestionCoffee /></PrivateRoute>}/>
          <Route path="*" element={<p>Ups, no existe la ruta</p>}/> 
        </Routes>
      </HashRouter>
    </AuthProvider>

  );
}

export default App;
