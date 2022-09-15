import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
import Home from './Views/Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NewsOfCurrency from './Views/Currency/NewsOfCurrency';
import Currency from './Views/Currency/Currency';

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
              <Route path="/news/currency/:id" element={<NewsOfCurrency />}  />
            </Routes >
            <Routes >
              <Route path='/currency/:id' element={<Currency />}/>
            </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
