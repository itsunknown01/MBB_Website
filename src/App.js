import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layout/test/test";
import About from "./pages/About";
import Footer from "./layout/Footer";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header mobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home mobile={isMobile} />} />
        <Route path="/about" element={<About mobile={isMobile} />} />
        <Route path="/course" element={<Course mobile={isMobile} />} />
        <Route path="/blog" element={<Blog mobile={isMobile} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
