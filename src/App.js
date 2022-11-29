import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ContactUS/ContactUs';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import NavigationMenu from './Pages/Sheard/NavigaionMenu/NavigationMenu';
import 'bootstrap/dist/css/bootstrap.css';
import FooterSection from './Pages/Sheard/FooterSection/FooterSection';
import TestPage from './Pages/TestPage/TestPage';
// import {storage} from './firebase.init'
import 'react-multi-carousel/lib/styles.css';
import PageNotFound from './Pages/Sheard/PageNotFound/PageNotFound';
import EmailSentSuccesfully from './Pages/Sheard/EmailSentSuccesfully/EmailSentSuccesfully';

function App() {

  return (
    <>
    {/* Header ------------Start ---- */}
      <header>
        <NavigationMenu/>
      </header>
    {/* Header ------------End ---- */}
     {/* Routes ------------------------------------------------------------------------------------- Start ----- */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/test-page' element={<TestPage/>}></Route>
        <Route path='/email-sent' element={<EmailSentSuccesfully/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
     {/* Routes --------------------------------------------------------------------------------------- End ----- */}
     {/* Footer ----------- Start ----- */}
     <footer className='bg-light py-4'>
       <FooterSection/>
     </footer>
     {/* Footer ----------- End ----- */}
    </>
  );
}

export default App;
