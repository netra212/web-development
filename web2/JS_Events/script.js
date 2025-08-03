
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked.</b>. Enjoy your click...!"
})

btn.addEventListener("contextmenu", () => {
    alert("Don't hack us by Right clicked please...!");
})

document.addEventListener("keydown", (e) => {
    alert("Don't hack us by Right clicked please...!");
})