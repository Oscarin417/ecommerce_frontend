import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import { detalleProducto } from "../components/conexion"
import {
  CircularProgress,
  Alert,
  Card,
  CardActions,
  Typography,
  Button,
  Container,
  CardContent,
} from "@mui/material"
import Carusel from "../components/Carusel"
import NavBar from "../components/NavBar"

const ProductoDetalle = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const viewProducto = async () => {
      try {
        const data = await detalleProducto({ id })
        setProducto(data)
        console.log(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      viewProducto()
    }
  }, [id])

  if (loading) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <CircularProgress />
      </Container>
    )
  }

  if (error) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <Alert variant="filled" severity="error">
          Error al cargar el producto: {error.message}
        </Alert>
      </Container>
    )
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Card>
          <Carusel producto={producto}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.nombre}
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
              ${producto.precio}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 1 }}>
              {producto.descripcion}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Cantidad disponible: {producto.cantidad}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", pr: 2, pb: 2 }}>
            <Button size="small">
              Agregar al carrito
            </Button>
            <Button 
              size="small"
              component={Link}
              to="/"
            >
              Regresar
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

export default ProductoDetalle
