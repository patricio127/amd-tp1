Vue.component('product-list-component', {
    template: `
    <div>
        <ol>
            <li v-for="producto in productos" :key="producto.codigo">
                <product-component v-show="editandoCodigo != producto.codigo" :producto="producto"
                                    @editar="editar($event)" @eliminar="eliminar($event)">
                </product-component>
                <edit-component v-if="editandoCodigo == producto.codigo" :producto="producto" 
                                @terminarEdicion="terminarEdicion">
                </edit-component>
            </li>
        </ol>
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