import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material"
import { AccountCircle, ShoppingCart, Home } from "@mui/icons-material"

const NavBar = ()=> {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display:"flex", alignItems:"center", gap:1 }}>
            <Home />
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              Ecommerce
            </Typography>
          </Box>
          <Box sx={{ display:"flex", alignItems:"center", gap:1 }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="Perfil de usuario"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="Carrito de compras"
              color="inherit"
            >
              <ShoppingCart />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box> 
  )
}

export default NavBar
