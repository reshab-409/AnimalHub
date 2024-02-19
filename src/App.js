import Footer from './Compound/Footer/Footer';
import Header from './Compound/Header/Header';
import Home from './Compound/HOME/Home';
import ContactUs from './Components/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Compound/Products/Products';
import Feedback from './Compound/BODY/Feedback';
import Auth from './Compound/Auth/Auth';
import LoginError from './LoginError';
import Cart from './Compound/Cart/Cart';
import Payment from './Compound/Payment/Payment';
import Checkout from './Compound/Checkout/Checkout';
import ProfilePage from './Compound/Profile/Profile';
import SuccessPage from './Compound/PaymentSuccess/Success';
function App() {
  const a = window.localStorage.getItem("isLogin");
  const login = JSON.parse(a);
  const b = localStorage.getItem('hasVisited');
  const firstVisit = JSON.parse(b);
  return (
    <Router>
      {login && firstVisit && <Header />}
      <Routes>
        <Route path='/' element={login ? <Home /> : <Auth />} />
        <Route path='/ContactUs' element={login ? <ContactUs /> : <LoginError />} />
        <Route path='/Shooping' element={login ? <Products /> : <LoginError />} />
        <Route path='/Support' element={login ? <Feedback /> : <LoginError />} />
        <Route path='/Cart' element={login ? <Cart /> : <LoginError />} />
        <Route path='/Payment' element={login ? <Payment /> : <LoginError />} />
        <Route path='/Checkout' element={login ? <Checkout /> : <LoginError />} />
        <Route path='/Profile' element={login ? <ProfilePage /> : <LoginError />} />
        <Route path='/PaymentSuccessful' element={login ? <SuccessPage /> : <LoginError />} />
      </Routes>
      {login && firstVisit && <Footer />}
    </Router>
  );
}

export default App;