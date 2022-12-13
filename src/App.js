import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductListing from './components/ProductListing';
import "react-loading-skeleton/dist/skeleton.css";
import ProductDetails from './components/ProductDetails';

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
