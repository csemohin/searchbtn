var search = document.querySelector("#search");
var inp = document.querySelector(".inp");
search.addEventListener("click",()=>{
    search.style.width = "20%";
    search.style.cursor = "text";
    search.style.cursor = "text";
    search.setAttribute("placeholder", "Type Anything");
    inp.style.border = "none"
});