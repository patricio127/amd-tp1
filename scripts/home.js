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
Vue.filter('mayuscula', function(texto){
    if(!texto){
        return'';
    }
    return texto.charAt(0).toUpperCase()+texto.slice(1);
});
Vue.filter('formatoPrecio', function(numero){
    if(!numero){
        return'';
    }
    return `$ ${numero}`;
});
const app = new Vue ({
    el:"#productos",
    data: function(){
        return {
            productos: leerListaProdutos()
        }
    },
});
