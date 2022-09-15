import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Eventform from "./pages/Eventform";
import Events from "./pages/Events";
import Core from "./pages/Core";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams";

import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <body>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Eventform" element={<Eventform />} />
            <Route path="/Core" element={<Core />} />
            <Route path="/Teams" element={<Teams />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Sidebar>
        <>
          <Footer />
          <BackToTop />
        </>
      </Router>
    </body>
  );
}

export default App;
