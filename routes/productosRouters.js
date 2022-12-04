//Crear routers
// 6- Importar express y espress,Routers
const express = require("express");
const router = express.Router();
// 6- Impotar middleware
const authMidd = require("../middleware/authMidd");
// 6- Impotar controller
const productosController = require("../controllers/productosController");

// 6- Crear rutas para el CRUD
    //Adicionar middleware (usuario autenticado para hacer cualquier acción)
    //LLamar funciones creadas en el controller
router.get("/", authMidd, productosController.obtenerProducto);
router.post("/:id", authMidd, productosController.crearProducto);
router.put("/", authMidd, productosController.actualizarProducto);
router.delete("/", authMidd, productosController.borrarProducto);

// 6- Exportar y definir rutas
module.exports = router;