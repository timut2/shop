// App.js
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Info from './Components/Info';
function App() {
  return (
    <Router>
    <div>
      {/* {!isPuzzleSolved ? (
        <Puzzle onSolve={() => setIsPuzzleSolved(true)} /> // Передаем функцию для решения головоломки
      ) : ( */}
        <>
          <Header />
          <div className="main-container"> 
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/info" element={<Info />} /> {/* Change this to your Info component */}
          </Routes>
          </div>
          <Footer />
        </>
      {/* )} */}
    </div>
    </Router>
  );
}

export default App;
