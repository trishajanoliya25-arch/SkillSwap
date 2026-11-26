

const loginBtn = document.querySelector(".login-btn");
const skillButtons = document.querySelectorAll(".skill-card button");


loginBtn.addEventListener("click", function () {
    alert("Login feature is coming soon!");
});


skillButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const skillName = button.parentElement.querySelector("h3").innerText;

        alert("You selected: " + skillName);
    });
});
