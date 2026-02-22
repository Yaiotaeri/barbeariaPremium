const contImg = document.getElementById("contImg");
const goInsta = document.getElementById("goInsta");
const goFaceook = document.getElementById("goFaceook");
const agendarHorario = document.getElementById("agendarHorario");
let i = 0;
const images = [
  "./assets/img/oneImage.jpg",
  "./assets/img/twoImg.jpg",
  "./assets/img/treeImg.jpg"
];

setInterval(()=>{
  contImg.style.opacity = 0;

  setTimeout(()=>{
    contImg.src = images[i];
    contImg.style.opacity = 1;
    i = (i + 1) % images.length;
  },300);

},4000);

function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);


goInsta.addEventListener("click", ()=>{
  window.open("https://www.instagram.com/jvmendeess__/")
});
goFaceook.addEventListener("click", ()=>{
  window.open("https://www.facebook.com")
});
agendarHorario.addEventListener("click", ()=>{
  window.open("https://api.whatsapp.com/send?phone=5535988874386&text=Olá%20vim%20pelo%20seu%20site%20😁")
});