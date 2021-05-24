Vue.component('product-list-component', {
    template: `
    <div id="lista-productos">
        <h2>Lista de productos</h2>
        <div id="agregar"><router-link to="/agregar" class="nav-link"><span></span>Agregar</router-link></div>
        <div class="row encabezado" v-if="productos.length > 0">
            <div class="col-1">Codigo</div>
            <div class="col-1">Imagen</div>
            <div class="col-2">Nombre</div>
            <div class="col-5">Descripcion del producto</div>
            <div class="col-1">Precio</div>
        </div>
        <transition-group tag="ol" enter-active-class="animate__animated animate__bounceInLeft"
                            leave-active-class=" animate__animated animate__fadeOutRightBig" v-if="productos.length > 0">
            <li v-for="producto in productos" :key="producto.codigo">
                <product-component v-show="editandoCodigo != producto.codigo" :producto="producto"
                                    @editar="editar($event)" @eliminar="eliminar($event)">
                </product-component>
                <edit-component v-if="editandoCodigo == producto.codigo" :producto="producto" 
                                @terminarEdicion="terminarEdicion">
                </edit-component>
            </li>
        </transition-group>
        <p v-else>Aún no hay productos</p>
    </div>`,
    mounted:function(){
        this.productos=leerListaProdutos();
    },
    methods: {
        eliminar:function(producto){
            eliminarProducto(producto);
        },
        editar:function(producto){
            this.editandoCodigo=producto.codigo;
        },
        terminarEdicion:function(){
            this.editandoCodigo=undefined;
        },
    },
    data:function(){
        return {
            productos:[],
            editandoCodigo:undefined,
        }
    }
})