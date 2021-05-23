Vue.component('edit-component', {
    template: `
    <div>
        <form-component @guardar="guardar" :producto="producto" :modoEdicion="true"></form-component>
    </div>`,
    props:['producto'],
    methods:{
        guardar:function(){
            actualizarProducto(this.producto);
            this.$emit('terminarEdicion');
        },
    },
})