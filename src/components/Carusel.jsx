import { useState } from "react"
import { CardMedia, IconButton } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const Carusel = ({producto})=>{
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const productImages = producto
    ? [producto.imagen1, producto.imagen2, producto.imagen3].filter(Boolean) // Filtramos valores nulos o indefinidos
    : []

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  return(
    <>
      {productImages.length > 0 && (
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={handlePreviousImage}
            disabled={productImages.length <= 1} // Deshabilita si solo hay una imagen
            sx={{ position: "absolute", left: 0, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.7)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' } }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <CardMedia
            component="img"
            height="400" // Ajusta la altura según tus necesidades
            image={productImages[currentImageIndex]}
            alt={producto.nombre}
            sx={{ objectFit: 'contain', width: '100%', maxHeight: 400 }} // Ajusta objectFit y ancho
          />
          <IconButton
            onClick={handleNextImage}
            disabled={productImages.length <= 1} // Deshabilita si solo hay una imagen
            sx={{ position: "absolute", right: 0, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.7)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' } }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      )}
    </>
  )
}

export default Carusel
