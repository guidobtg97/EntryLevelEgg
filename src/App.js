import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Registro from "./components/Registro/Registro";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Empleos from "./components/Empleos/Empleos";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/jobs" element={<Empleos/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<Registro/>}/>
        </Routes>
      <Footer/>
    </Router>   
  );
}
export default App;
