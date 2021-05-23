Vue.component('create-component', {
    template: `
    <div>
        <h2>Añadir producto</h2>
        <router-link to="/" class="nav-link" id="volver">Volver</router-link>
        <form-component @guardar="guardar" :producto="producto" :codigoRepetido="codigoRepetido" :modoEdicion="false"></form-component>
    </div>`,
    data:function(){
        return {
            producto: {
                codigo: '',
                nombre: '',
                descripcion: '',
                precio: '',
                urlImagen: '',
            },
            codigoRepetido: false,
        }
    },
    methods:{
        guardar:function() {
            if(codigoExistente(this.producto.codigo)){
                this.codigoRepetido=true;
            }else {
                agregarProducto(this.producto);
                this.$router.push('/')
            };
        }
    },
    
})