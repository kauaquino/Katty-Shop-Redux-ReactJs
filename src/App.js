import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Products from './containers/Products'
import ProductDetails from './containers/ProductDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
          <Route path="/" exact element={<Products/>}/>
          <Route path="/product/:productId" exact element={<ProductDetails/>}/>
          <Route>404 Não encontrado</Route>
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
