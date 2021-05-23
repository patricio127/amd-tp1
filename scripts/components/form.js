Vue.component('form-component', {
    template:`<div>
                <form method="post" id="formulario" @submit.prevent="guardar">
                    <div class="col-md-12 col-lg-6" v-if="!modoEdicion">
                        <label for="codigo" class="form-label">Codigo del producto</label>
                        <input type="number" v-on:keydown.190.stop.prevent v-on:keydown.188.stop.prevent v-on:keydown.189.stop.prevent
                        v-on:keydown.109.stop.prevent v-on:keydown.110.stop.prevent  v-on:keydown.107.stop.prevent  
                        v-model.number="producto.codigo" class="form-control" placeholder="1234" id="codigo" name="codigo" required>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <label for="nombre">Nombre del Producto</label>
                        <input type="text" v-model="producto.nombre" class="form-control" 
                        placeholder="Nombre del producto" id="nombre" name="nombre" required>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <label for="descripcion" class="form-label">Descripción</label>
                        <input type="textarea" v-model="producto.descripcion" class="form-control" 
                        placeholder="Descripcion" id="descripcion" name="descripcion" required>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <label for="precio" class="form-label">Precio</label>
                        <input type="number" v-model.number="producto.precio" class="form-control" 
                        id="precio" name="precio" required>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <label for="url-imagen" class="form-label">Ingrese la URL de la imagen de internet</label>
                        <input type="text" v-model="producto.urlImagen" class="form-control" id="url-imagen" 
                        name="url-imagen" required>
                        <div class="vista-previa">
                            <img :src='producto.urlImagen' v-show="producto.urlImagen" alt='vista previa de la imagen'>
                        </div>
                    </div>
                    <p v-if="validando && codigoRepetido">El codigo del producto ya existe</p>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mx-auto px-5 ">
                            {{modoEdicion ? "Listo" : "Guardar"}}
                        </button>
                    </div>
                </form>
            </div>`,
    props:['producto','codigoRepetido', 'modoEdicion'],
    data:function(){
        return {
            validando : false,
        }
    },
    methods : {
        guardar:function(){
            this.validando = true;
            this.$emit('guardar');
        }
    }
});