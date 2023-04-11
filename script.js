const form = document.querySelector("form");
const submitButton = document.querySelector("button");

const passwordInputs = document.querySelectorAll(".password");
const password = document.querySelector("input[id=password]");
const confirmPassword = document.querySelector("input[id=confirm-password]");
const errorText = document.querySelector(".error-text");

submitButton.addEventListener("click", () => {
    form.submit();
});

passwordInputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (password.value == confirmPassword.value) {
            removeError();
        } else {
            addError();
        }
    });
});

function addError() {
    passwordInputs.forEach((element) => {
        element.classList.add("error");
    });

    errorText.style["visibility"] = "visible";
}

function removeError() {
    passwordInputs.forEach((element) => {
        element.classList.remove("error");
    });
    
    errorText.style["visibility"] = "hidden"
}