// console.log("Hola mundo");

// Retorna todos los elementos encontrados en una lista
let btnsClose = document.querySelectorAll(".close");

btnsClose.forEach(function(btnClose){

  btnClose.addEventListener('click', function(event){
    event.preventDefault(); // evita la accion por dafault

    let content = document.querySelector(".content");

    // Quitar la clase de la animacion
    content.classList.remove("zoomIn");
    content.classList.remove("animated");

    // Poner las nuevas clases de animacion
    content.classList.add("zoomOut");
    content.classList.add("animated");

    // Redireccionando al index despues de 0.8s
    setTimeout(function(){
      location.href = "/boletines/";
    }, 800);
  });
});
