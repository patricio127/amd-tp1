let listaProductos = [];
const guardarEnLS = function() {
    localStorage.listaProductos = JSON.stringify(listaProductos);
};
const leerLS = function() {
    listaProductos = JSON.parse(localStorage.listaProductos);
};
const leerListaProdutos=function(){
    leerLS();
    return listaProductos;
};
const agregarProducto = function(producto) {
    listaProductos.push(producto);
    console.log(listaProductos);
    guardarEnLS();
};
const actualizarProducto=function(producto){
    guardarEnLS();
};
const eliminarProducto=function(producto){
    listaProductos.splice(listaProductos.indexOf(producto),1);
    guardarEnLS();
};
const codigoExistente = function(codigo){
    let yaExiste = false;
    listaProductos.forEach(producto => {
        if(producto.codigo == codigo){
            yaExiste = true;
        }
    });
    return yaExiste;
};
const app = new Vue ({
    el:"#app",
    router,
    data: {
        
    },
    methods: {
        
       
    }
});
