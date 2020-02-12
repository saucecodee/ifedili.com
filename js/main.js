window.onload = () => {
     console.log("loaded")
     // document.querySelector("#intro").style.display = "none";
}

document.querySelector("#menu-btn").addEventListener("click", () => {
     document.querySelector("header").classList.toggle("mobile-header");
     document.querySelector("main").classList.toggle("blur");
})