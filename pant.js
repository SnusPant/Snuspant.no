/*const bildeslide = document.queryselector(".bildeslide")
const image = document.queryselectorAll("bildeslide img")

//knapper
const forrige = document.queryselector("#forrige")
const neste = document.queryselector("#neste")

//counter
let counter = 1;
const size = image[0].clientwidth;

bildeslide.style.transform =  "translateX("+ (size * counter) +"px)"

neste.addEventListener("click",()=>{
  if(counter >= image.length -1) return;
bildeslide.style.transition = "transform 0.4s ease-in-out";
counter++;
bildeslide.style.transform =  "translateX("+ (size * counter) +"px)"

});
forrige.addEventListener("click",()=>{
    if(counter <=0) return;
bildeslide.style.transition = "transform 0.4s ease-in-out";
counter--;
bildeslide.style.transform =  "translateX("+ (size * counter) +"px)"

});

bildeslide;.addEventListener("transitionend", ()=>){
  if(image[counter].id=== "sistebilde"){
    bildeslide.style.transition = "none";
    counter = image.length -2;
    bildeslide.style.transform =  "translateX("+ (size * counter) +"px)"

)};

bildeslide;.addEventListener("transitionend", ()=>){
  if(image[counter].id=== "førstebilde"){
    bildeslide.style.transition = "none";
    counter = image.length -counter;
    bildeslide.style.transform =  "translateX("+ (size * counter) +"px)"

)};
https://www.youtube.com/watch?v=KcdBOoK3Pfw */
/*var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}*/
