// Crear controllers
// 6- Importar el modelo
const Productos = require("../models/Productos");
const Categorias = require("../models/Categorias");


// 6- Crear exports con cada una de las funciones
exports.obtenerProducto = async (req, res) => {
    //res.status(200).json({ msg: "Obtener Producto" });

    const { categoriaId } = req.body;

     try{
        const producto = await Productos.find({ categoriaId: req.categoria.id });
        res.json({ producto });
    }catch(error){
        console.log(error);
    }
};

exports.crearProducto = async (req, res) => {
    //res.status(200).json({ msg: "Crear Producto" });

    const { nombre } = req.body;

    try{
        let producto = await Productos.findOne({ nombre });
        //Si existe
    if(producto){
        return res.status(400).json({ msg: "El producto ya existe" });
    }

       // await Productos.findOne({ _id: req.params.id });
        producto = new Productos(req.body);
        //producto.categoriaId = req.categoria.id;
        producto.categoriaId = await Categorias.findOne({ _id: req.params.id });
        producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
    }
};

exports.actualizarProducto = async (req, res) => {
    //res.status(200).json({ msg: "Actualizar Producto" });
};

exports.borrarProducto = async (req, res) => {
    //res.status(200).json({ msg: "Borrar Producto" });
};