import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Offs from './components/offs/Offs.jsx'
import Products from './components/products/Products.jsx'
import Comment from './components/comment/Comments.jsx'
import Users from './components/users/Users.jsx'
import Orders from './components/orders/Orders.jsx'
function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/products" element={<Products/>}/>
          <Route path="/comment" element={<Comment/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/offs" element={<Offs/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
