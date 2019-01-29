var search = document.querySelector("#search");
var icon = document.querySelector("#icon");
var inp = document.querySelector(".inp");
search.addEventListener("click",()=>{
    search.style.width = "20%";
    search.style.paddingLeft = "50px";
    search.style.cursor = "text";
    search.style.cursor = "text";
    search.setAttribute("placeholder", "Type Anything");
    inp.style.border = "none"
});