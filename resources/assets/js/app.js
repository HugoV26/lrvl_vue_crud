//const { default: Axios } = require("axios");

//var urlUsers = 'https://jsonplaceholder.typicode.com/users';

new Vue({
    el: '#crud',
    created: function() {
        this.getKeeps();
    },
    data: {
        keeps: [],
        newKeep: '',
        errors: [],
        fillKeep: {'id': '', 'keep': ''},
    },
    methods: {
        getKeeps: function() {
            let urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
            });
        },
        deleteKeep: function(keep) {
            //alert('eliminar');
            //alert(keep.id);
            let url = 'tasks/' + keep.id;
            axios.delete(url).then(response => { //Eliminamos
                this.getKeeps();  //Listamos
                toastr.success('Eliminado Correctamente'); //Mensaje
                //alert('Eliminado');
            });

        },
        createKeep: function(){
            let url = 'tasks';
            axios.post(url, {
                keep: this.newKeep
            }).then(response => {
                this.getKeeps();
                this.newKeep = ''; //Caja de texto vacía
                this.errors = [];

                $('#create').modal('hide'); //Quitamos de la ventana este formulario flotante
                toastr.success('Nueva tarea creada con éxito');
            }).catch(error => {
                this.errors = error.response.data
            });
        },
        editKeep: function(keep){
            this.fillKeep.id = keep.id;
            this.fillKeep.keep = keep.keep;
            //id del div del formulario
            $('#edit').modal('show');
        },
        updateKeep: function(id){
            //alert('edicion');
            let url = 'tasks/' + id;
            //             Parámetros relacionados con el registro
            axios.put(url, this.fillKeep).then(response => {
                this.getKeeps();
                this.fillKeep = {'id': '', 'keep': ''};
                this.errors = [];
                $('#edit').modal('hide');
                toastr.success('Tarea actualizada con éxito');
            }).catch(error => {
                this.errors = error.response.data;
            });
        }
    }
    /*
    created: function(){
        this.getUsers();
    },
    data: {
        lists: []
    },
    methods: {
        getUsers: function() {
            axios.get(urlUsers).then(response => {
                this.lists = response.data
            });
        }
    }
    */
});