const menuBtn=document.querySelector(".mob-menu-btn");
const menuLst=document.querySelector(".menu");
menuBtn.addEventListener("click" , ()=>{
    menuLst.classList.toggle("active");
});