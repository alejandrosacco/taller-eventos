document.getElementById('contenedor').addEventListener('click', function(){
    alert("Hola! Soy el div")
});

document.getElementById('boton').addEventListener('click', (evento) => {
    evento.stopPropagation();
})