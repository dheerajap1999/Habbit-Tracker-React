// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Create from "./components/create";
import configStore from "./store";
import Update from "./components/update";


function App() {
  return (
    <>
    <Provider store={configStore}>
      <BrowserRouter basename="/Habbit-Tracker-React">
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Home />} />  
            <Route path='/create' element={<Create />} />  
            <Route path='/update' element={<Update />} />  
          </Route>
        </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
