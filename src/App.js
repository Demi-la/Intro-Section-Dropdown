import Intro from './Component/Intro';
import {BrowserRouter, Route, Router } from 'react-router-dom';
import Nav from './Component/Nav/Nav.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Intro/>
      {/* <Router>
      <Route path='/nav'element={<Nav/>} />
      </Router>  */}
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
