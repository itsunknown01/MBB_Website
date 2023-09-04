import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layout/Header";
import About from "./pages/About";
import Footer from "./layout/Footer";
import Course from "./pages/Course";

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/course" element={<Course/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
