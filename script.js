const btn = document.querySelector("span");
const icon = document.querySelector("#icon");
const body = document.querySelector("body");

btn.addEventListener("click", e=> {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")) {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    } else {
        icon.classList.add("fa-sun")
        icon.classList.remove("fa-moon")
    }
})