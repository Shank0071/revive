const toggleBtn = document.getElementsByClassName("toggle-buttons")[0];
const navCont = document.getElementsByClassName("nav")[0];
console.log('toggleBtn', navCont);

toggleBtn.addEventListener("click", () => {
    navCont.classList.toggle("active");
    console.log("hello")
})