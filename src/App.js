import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ContactUS/ContactUs';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import NavigationMenu from './Pages/Sheard/NavigaionMenu/NavigationMenu';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    {/* Header ------------Start ---- */}
      <header>
        <NavigationMenu></NavigationMenu>
      </header>
    {/* Header ------------End ---- */}
     {/* Routes ------------------------------------------------------------------------------------- Start ----- */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
      </Routes>
     {/* Routes --------------------------------------------------------------------------------------- End ----- */}
     {/* Footer ----------- Start ----- */}
     
     {/* Footer ----------- End ----- */}
    </>
  );
}

export default App;
