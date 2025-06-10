import { createBrowserRouter } from "react-router"
import Productos from "./views/productos"
import ProductoDetalle from './views/productoDetalle'

const App = createBrowserRouter([
  {path: "/", element: <Productos />},
  {path: "producto/:id", element: <ProductoDetalle />}
])

export default App
