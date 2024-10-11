const Inicio =document.getElementById("Inicio")
const Rest =document.getElementById("Restaurante")
const Mercado =document.getElementById("Mercado")
const Perfil =document.getElementById("Perfil")
const titulo =document.getElementById("t1")
Inicio.style.display ="flex"
sessionStorage.setItem("pudo", 'ok')

 function iniciar(){
    titulo.classList.add("animate__animated", "animate__fadeInRight")
    titulo.innerText= "Inicio"
    Inicio.style.display ="flex"
    Rest.style.display="none"
    Mercado.style.display="none"
    Perfil.style.display ='none'
    titulo.classList.remove("animate__animated", "animate__fadeInRight")
}
function rest(){
      //titulo.classList.add('animate__fadeInDownBig')
    titulo.classList.add("animate__animated", "animate__fadeInRight")
    titulo.innerText= "Restaurante"
    Inicio.style.display ="none"
    Rest.style.display="flex"
    Mercado.style.display="none"
    Perfil.style.display ='none'
    titulo.classList.remove("animate__animated", "animate__fadeInRight")
}
function mercado(){
  
    titulo.classList.add("animate__animated", "animate__fadeInRight")
      titulo.innerText= "Mercado"
    Inicio.style.display ="none"
    Rest.style.display="none"
    Mercado.style.display="flex"
    Perfil.style.display ='none'
    titulo.classList.remove("animate__animated", "animate__fadeInRight")
}
function perfil(){
    titulo.classList.add("animate__animated", "animate__fadeInRight")
      titulo.innerText= "Perfil"
    Inicio.style.display ="none"
    Rest.style.display="none"
    Mercado.style.display="none"
    Perfil.style.display ='flex'
    titulo.classList.remove("animate__animated", "animate__fadeInRight")
}

function MostrardivCarrito(){
  document.getElementById("divCarrito").style.display= "flex"
  
}

function OcultardivCarrito(){
  document.getElementById("divCarrito").style.display= "none"

}


//slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const texts = [
  "Cafetería",
  "Mercado",
  "Entregas a Domicilio",
  "Precios competitivos",
  "Restaurante",
  
  // Agrega más textos según sea necesario
];
const textElement = document.querySelector('.slider-text')
function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = -index * 100; // Calcula el desplazamiento
    slidesContainer.style.transform = `translateX(${offset}%)`;
    textElement.textContent = texts[index];

}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Incrementa el índice y vuelve al inicio
    showSlide(currentIndex);
}, 6000); // Cambia cada 5 segundos