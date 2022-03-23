import './App.css';

// LAS LLAVES {} SON PORQUE ESTAMOS IMPORTANDO UN "FUNCTIONAL COMPONENT" A TRAVEZ DE UN DESTRUCTURING. 
// SI IMPORTARAMOS UNA "CLASS COMPONENT", DEBE SER SIN LAS LLAVES {}
import { Footer } from './components/public/Footer';
import Main from './components/public/Main';
import { Navbar } from './components/public/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';

// APP engloba componentes
function App() {
  return (
    <div>
      <Navbar />
      {/* Agregamos el browserRouter directamente en el index.js */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path={""} element={ <Main />} />
          <Route path={"/details/:id"} element={<Detail/>} />
          <Route path={"/user-form"} element={<UserForm/>} />
        </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
