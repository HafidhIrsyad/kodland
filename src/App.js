import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;
