Vue.component('product-component', {
    template: `
    <div class="row producto" >
        <div class="col-1">{{producto.codigo}}</div>
        <div class="col-1"><img :src='producto.urlImagen' v-show="producto.urlImagen" alt='vista previa de la imagen'></div>
        <div class="col-2">{{producto.nombre | mayuscula}}</div>
        <div class="col-5">{{producto.descripcion | mayuscula}}</div>
        <div class="col-1">{{producto.precio | formatoPrecio}}</div>
        <div class="col-1"><button v-on:click="editar">Editar</button></div>
        <div class="col-1"><button v-on:click="eliminar">Eliminar</button></div>
    </div>`,
    props:['producto'],
    methods:{
        eliminar:function(){
            this.$emit('eliminar',this.producto);
        },
        editar:function(){
            this.$emit('editar',this.producto);
        }
    },
})