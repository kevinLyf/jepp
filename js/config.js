const setSeller = document.getElementById("setSeller");
const setSellerBtn = document.getElementById("setSellerBtn");
const asideMenu = document.getElementById("asideMenu");
const menuBtn = document.getElementById("menu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

if(!localStorage.getItem("index")) {
    localStorage.setItem("index", 1);
    window.location.reload();
  }

setSellerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(!setSeller.value || String(setSeller.value).trim() === "") return alert("Insira o seu nome!");

    const array = {
        name: setSeller.value,
        startTime: String(new Date().toLocaleTimeString()).padEnd(2, '0')
    }

    localStorage.setItem("CurrentSeller", JSON.stringify(array));
    window.location.href = "../index.html"
})

menuBtn.addEventListener("click", () => {
    if(asideMenu.style.display = "none") {
        asideMenu.style.display = "block"
    } else {
        asideMenu.style.display = "none"
    }
})

closeMenuBtn.addEventListener("click", () => {
    asideMenu.style.display = "none"
})