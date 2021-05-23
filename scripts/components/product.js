Vue.component('product-component', {
    template: `
    <div>
        <span>{{producto}}</span><button v-on:click="editar">Editar</button><button v-on:click="eliminar">Eliminar</button>
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