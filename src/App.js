import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import './app.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div  className='App'>
          <BrowserRouter >
              <Header />
              <Routes>
                  <Route path='/' element={<Home />} exact></Route>
                  <Route path='/button' element={<ButtonPage />}></Route>
              </Routes>
              <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;