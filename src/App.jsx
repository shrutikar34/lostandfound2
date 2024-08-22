import FoundItems from "./FRONTEND/Components/Browse/FoundItems";
import LostItems from "./FRONTEND/Components/Browse/LostItems";
import Footer from "./FRONTEND/Components/Footer";
import Navbar from "./FRONTEND/Components/Navbar";
import ReportFoundItem from "./FRONTEND/Components/ReportFoundItem";
import ReportLostItem from "./FRONTEND/Components/ReportLostItem";
import Storage from "./FRONTEND/Components/Store/Storage";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./FRONTEND/Components/Home";
import Contactus from "./FRONTEND/Components/Contactus";

function App() {
  return (
    <Storage>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reportlostitem" element={<ReportLostItem />} />
        <Route path="/reportfounditem" element={<ReportFoundItem />} />
        <Route path="/browselostitem" element={<LostItems />} />
        <Route path="/browsefounditem" element={<FoundItems />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </Storage>
  );
}

export default App;
