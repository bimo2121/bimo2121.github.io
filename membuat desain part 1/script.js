const wrapper = document.querySelector( ".wrapper")
const question = document.querySelector( ".question")
const img = document.querySelector( ".img")
const yesBtn = document.querySelector( ".yes-btn")
const noBtn = document.querySelector( ".no-btn")

yesBtn.addEventListener("click", () => 
{
    question.innerHTML = " I LOVE YOU TO, HIHIHI" ;
    
});

noBtn.addEventListener("mouseover", () => 
{
 const noBtnReact = noBtn.getBoundingClientRect();
 const maxX = window.innerWidth - noBtnReact.width;
 const maxY = window.innerHeight - noBtnReact.height;

 const randomX=Math.floor(Math.random() * maxX);
 const randomY=Math.floor(Math.random() * maxY);
 
 noBtn.style.left=randomX + "px";
 noBtn.style.top=randomY + "px";

});