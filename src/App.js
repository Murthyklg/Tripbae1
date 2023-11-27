import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Adminpage from './Pages/Adminpage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Landingpage />} />
      <Route path='/Admin' element={<Adminpage />} />
  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
