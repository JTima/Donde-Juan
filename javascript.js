const mobile = document.querySelector(".mobile")
const menu = document.querySelector(".menu")
const x = document.querySelector(".x")
const des = document.querySelector(".des")

mobile.addEventListener("click", () => {
    menu.classList.toggle("activo")
    x.classList.toggle("xx")
    des.classList.toggle("des")
})

