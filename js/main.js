var app = new Vue({
    el:"#app",
    data: {
        mensaje: true
    },

    created() {
        this.activarModal();
    },

    methods: {
        confirma(){
        
        },

        loSiento(){
            this.mensaje= false
        },

        activarModal(){
            document.querySelector('#modalConfirmar').style.display = "block";
        },
        cerrarModal(){
            document.querySelector('#modalConfirmar').style.display = "none";
        },
    }

})

let tiempo
function cadaTresSegundos(){
    tiempo = setInterval(mensaje, 2000);
}
function mensaje(){
    alert("Han pasado 3 segundos")
}


// function confirmar() {
//     Swal.fire({
//         title: '¿Eres feliz amor, conmigo?',
//         icon: 'question',
//         text: "Antes de iniciar, deseo recordarte cuán importante eres para mí y agradecido siempre.",
//         // showCloseButton: true,
//         showCancelButton: true,
//         focusConfirm: true,
//         confirmButtonText:
//             'Contigo siempre!',
//         cancelButtonText:
//             'No, lo siento.',
//       })

// }