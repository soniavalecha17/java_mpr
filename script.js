const slide = document.querySelector(".movie-slide");
const movies = document.querySelectorAll(".movies");
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
    if (index < movies.length - 1) {
        index++;
    } else {
        index = 0;
    }
    slide.style.transform = `translateX(-${index * (movies[0].offsetWidth + 30)}px)`;
});

document.querySelector(".prev").addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = movies.length - 1;
    }
    slide.style.transform = `translateX(-${index * (movies[0].offsetWidth + 30)}px)`;
});

const loginbutton=document.querySelector("#login");
const signupbutton=document.querySelector("#signup");

loginbutton.addEventListener("click",()=>{
    window.location.href="login.html";
})


