import logo from './logo.svg';
import './App.css';
import { Product } from './Components/Product';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
     {/* <Product/> */}
    </div>
  );
}

export default App;
