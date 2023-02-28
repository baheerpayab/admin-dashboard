const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const close = document.getElementById("close");

console.log(close);

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})

close.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})
