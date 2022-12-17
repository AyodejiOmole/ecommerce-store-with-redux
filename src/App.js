import './App.css';
import Header from "./components/Header";
import "react-loading-skeleton/dist/skeleton.css";
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<ProductDetails/>}/>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
