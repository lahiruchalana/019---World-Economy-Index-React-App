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
import GDP from './Views/GDP/GDP';
import AdminHome from './Views/Admin/AdminHome';
import CurrencyRates from './Views/Admin/CurrencyRates';
import NewsGDPPerCapita from './Views/GDPPerCapita/NewsGDPPerCapita';
import GDPPerCapita from './Views/GDPPerCapita/GDPPerCapita';
import Country from './Views/Admin/Country';
import CurrencyAdmin from './Views/Admin/Currency';
import GDPAdmin from './Views/Admin/GDP';
import EconomyIndexAdmin from './Views/Admin/EconomyIndex';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <div>
            <Routes >
              <Route path="/" element={<Home />}  />
            </Routes >
            <Routes>
              <Route path='/admin/home' element={<AdminHome />}/>
            </Routes>
            <Routes>
              <Route path='/admin/currency/rate/:currencyname/:equalscurrencyname' element={<CurrencyRates/>}/>
            </Routes>
            <Routes>
              <Route path='/admin/country' element={<Country/>}/>
            </Routes>
            <Routes>
              <Route path='/admin/currency' element={<CurrencyAdmin/>}/>
            </Routes>
            <Routes>
              <Route path='/admin/gdp' element={<GDPAdmin/>}/>
            </Routes>
            <Routes>
              <Route path='/admin/economy/index' element={<EconomyIndexAdmin/>}/>
            </Routes>
            <Routes >
              <Route path="/news/currency/:currencyname/:equalscurrencyname" element={<NewsOfCurrency />}  />
            </Routes >
            <Routes >
              <Route path='/currency/:currencyname/:equalscurrencyname' element={<Currency />}/>
            </Routes>
            <Routes >
              <Route path='/news/gdp-per-capita/:countryname' element={<NewsGDPPerCapita />}/>
            </Routes>
            <Routes >
              <Route path='/gdp-per-capita/:countryname' element={<GDPPerCapita />}/>
            </Routes>
            <Routes>
              <Route path='/gdp/:id' element={<GDP />}/>
            </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
