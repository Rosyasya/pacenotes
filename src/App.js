import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './styles/app.scss';

function App() {
  return (
      <div  className='App'>
          <BrowserRouter >
              <Routes>
                  <Route path='/' element={<Home />} exact></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;