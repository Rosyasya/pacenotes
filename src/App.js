import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import './app.scss';

function App() {
  return (
      <div  className='App'>
          <BrowserRouter >
              <Routes>
                  <Route path='/' element={<Home />} exact></Route>
                  <Route path='/button' element={<ButtonPage />}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;