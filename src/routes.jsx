import Offs from "./components/offs/Offs.jsx";
import Products from "./components/products/Products.jsx";
import Comment from "./components/comment/Comments.jsx";
import Users from "./components/users/Users.jsx";
import Orders from "./components/orders/Orders.jsx";
const routes = () => [
  { path: "/products", element: <Products /> },
  { path: "/Comment", element: <Comment /> },
  { path: "/Users", element: <Users /> },
  { path: "/Orders", element: <Orders /> },
  { path: "/Offs", element: <Offs /> },
];
export default routes;
