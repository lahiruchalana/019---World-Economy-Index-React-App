import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
import Home from './Views/Home/Home';
import Currency from './Views/Currency/Currency';
import Header from './Components/Header';
// import Currency from './Views/Currency/Currency';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes >
            <Route path="/" element={<Home />}  />
          </Routes >
          <Routes >
            <Route path="/currency" element={<Currency />}  />
          </Routes >
        </div>
      </Router>
    </div>
  );
}

export default App;
