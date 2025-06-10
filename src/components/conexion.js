import axios from "axios"

export const getProductos = async ()=> {
  const response = await axios.get('http://localhost:8000/api/productos/')
  return response.data
}

export const detalleProducto = async ({id})=> {
  const response = await axios.get(`http://localhost:8000/api/productos/${id}`)
  return response.data
}
