import './App.css';

// LAS LLAVES {} SON PORQUE ESTAMOS IMPORTANDO UN "FUNCTIONAL COMPONENT" A TRAVEZ DE UN DESTRUCTURING. 
// SI IMPORTARAMOS UNA "CLASS COMPONENT", DEBE SER SIN LAS LLAVES {}
import { Footer } from './components/public/Footer';
import Main from './components/public/Main';
import { Navbar } from './components/public/Navbar';

// APP engloba componentes
function App() {
  return (
    <div>

      {/* -------------- NAVBAR ------------- */}
      <Navbar />

      {/* -------------- MAIN ------------- */}
      <Main />

      {/* -------------- FOOTER ------------- */}
      <Footer />

    </div>
  );
}

export default App;
