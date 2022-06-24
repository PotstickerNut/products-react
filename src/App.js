import "./App.css";
import productsData from "./Data/ProductsData";

import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";

function App() {
  console.log(productsData);
  return (
    <div className="App">
      <Navbar />
      <ProductsList products={productsData} />
    </div>
  );
}

export default App;
