import { useState, useEffect } from "react"
import { Container, Grid, CircularProgress, Alert, Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material"
import { getProductos } from "../components/conexion"
import { Link } from "react-router"
import NavBar from "../components/NavBar"

const productos = ()=> {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(()=> {
    const setProducts = async ()=> {
      try{
        const productos = await getProductos()
        setData(productos)
        setLoading(false)
      }catch(err){
        setError(err)
        setLoading(false)
      }
    }
    setProducts()
  }, [])

  if(loading){
    return <CircularProgress />
  }

  if(error){
    return <Alert variant="outlined" severity="error">
      Error al cargar los productos: {error.message}
      </Alert>
  }

  return(
    <>
      <NavBar />
      <Container>
        <Grid container spacing={4}>
          {data.map((p)=> {
           return(
             <Grid size={4} key={p.id}>
               <Card sx={{maxWidth: 345}}>
                 <CardMedia 
                   component="img"
                   alt={p.nombre}
                   image={p.imagen1}
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     {p.nombre}
                   </Typography>
                   <Typography variant="body2" sx={{color: 'text.secondary'}}>
                     ${p.precio}
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Button 
                      component={Link}
                      to={`/producto/${p.id}`} 
                      size="small">
                      Ver producto
                   </Button>
                 </CardActions>
               </Card>
             </Grid>
           )
         })} 
        </Grid>
      </Container>
    </>
  )
}

export default productos
