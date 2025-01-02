import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { CartContextProvider } from './context/CartContext';
import ProductDetails from './pages/ProductDetails';
import RootLayout from './Layout/RootLayout';

export default function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
    )
  );
  return (
    <CartContextProvider>
      <RouterProvider router={myRouter} />
    </CartContextProvider>
  );
}
