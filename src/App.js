import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import './app.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
      <div  className='App'>
          <BrowserRouter >
              <Header />
              <Routes>
                  <Route path='/' element={<Home />} exact></Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path='/services' element={<Services />}></Route>
                  <Route path='/contacts' element={<Contacts />}></Route>
                  <Route path='/blog' element={<Blog />}></Route>
                  <Route path='/button' element={<ButtonPage />}></Route>
              </Routes>
              <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;

