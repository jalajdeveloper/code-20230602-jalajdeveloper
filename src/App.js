import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
// import About from "./pages/About/index";
// import Explore from "./pages/Explore/index";
import Footer from "./components/Footer/index";

function App() {
 
  
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
