
//============intro loading ==================
setTimeout(() => {
    document.getElementById("intro").classList.add("fade-out");
}, 2000);

// ========== TAB SWITCHING FUNCTIONALITY ==========
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ========== MOBILE MENU TOGGLE ==========
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}
document.addEventListener('click', function (event) {
    var menuButton = document.querySelector('.fas.fa-bars');
    var closeButton = document.querySelector('.fas.fa-times');

    if (!sidemenu.contains(event.target) && !menuButton.contains(event.target) && !closeButton.contains(event.target)) {
        closemenu();
    }
});

// ========== TYPING EFFECT FOR DYNAMIC TEXT ==========
const textArray = ["UI/UX Designer", "Developer", "Programmer"];
const textElement = document.getElementById("dynamic-text");
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    textElement.innerText = isDeleting ? currentText.substring(0, charIndex - 1) : currentText.substring(0, charIndex + 1);
    charIndex += isDeleting ? -1 : 1;

    let typingSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typingSpeed = 500;
    }
    setTimeout(typeEffect, typingSpeed);
}
typeEffect();

// ========== GOOGLE SHEETS FORM SUBMISSION ==========
const scriptURL = 'https://script.google.com/macros/s/AKfycbzbBAePlRke8WS73wfJtUCHHcfUxAq2rek43S-xUZl7O2PeOJsUmq2hsGknF3VtRNB4/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "✅ Message sent successfully";
            msg.style.color = "#4caf50";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000); // reset after 5 seconds..

            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending message. Please try again.";
            msg.style.color = "red";
        });
});
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Thank you for reaching out!");
});
// ==============================================================================

