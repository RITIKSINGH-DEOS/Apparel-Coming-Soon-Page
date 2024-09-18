// const email = document.querySelector(".email input");
// const error_img = document.querySelector(".error-img");
// const error_msg = document.querySelector("error-msg");
// const button = document.querySelector("button img");
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// console.dir(email);
// button.addEventListener("click", function(){

// })

const email = document.querySelector(".email input");
const error_img = document.querySelector(".error-img");
const error_msg = document.querySelector(".error-msg");
const button = document.querySelector(".email button");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener("click", function () {
    const emailValue = email.value.trim();
    if (!emailRegex.test(emailValue)) {
        error_img.classList.toggle("hidden");
        error_msg.classList.toggle("hidden");
    }

});