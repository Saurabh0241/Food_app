import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import About from "./Components/Aboutus/About";
import Contact from "./Components/contact/Contact";
import Error from "./Components/Error/Error";
import Reastaurantsinfo from "./Components/Reasturantsmenu/Reasturantsinfo";
import { Provider } from "react-redux";
import appStore from "./Components/Store/appStore";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Routes>
          <Route index path="/" element={<Body />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Reasturants/:resId" element={<Reastaurantsinfo />} />
          <Route path="/Cart" element={<Cart />} />
          <Route errorElement={<Error />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
