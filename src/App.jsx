import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Admission from "./Pages/Admission";
import Mandatory from "./Pages/Mandatory";
import Academic from "./Pages/Academic";
import Achievement from "./Pages/Achievement";
import INfrastructure from "./Pages/INfrastructure";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {/* Header  */}
      <Header />
      {/* body  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admission" element={<Admission />} />
        <Route path="mandatory-public-Disclosure" element={<Mandatory />} />
        <Route path="academic" element={<Academic />} />
        <Route path="achievement" element={<Achievement />} />
        <Route path="infrastructure" element={<INfrastructure />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact us" element={<Contact />} />
      </Routes>
     <Footer/>
      {/* Footer  */}
      
    </>
  );
}

export default App;
