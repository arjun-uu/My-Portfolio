
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
const textArray = ["Coder", "Developer", "Programmer"];
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



const form = document.getElementById('form');
const result = document.getElementById('msg');

form.addEventListener('submit', async function(e) {
    e.preventDefault(); // stops page refresh

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.access_key = "d73f479c-88a1-4310-b90c-994199897dfb"; // your Web3Forms API key

    result.style.display = "block";
    result.innerText = "Please wait...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });

        const json = await response.json();

        if (response.ok) {
            result.innerText = "✅ Message sent successfully!";
        } else {
            result.innerText = `❌ Error: ${json.message}`;
            console.log(json);
        }

    } catch (error) {
        result.innerText = "❌ Something went wrong!";
        console.log(error);
    }

    form.reset();
    setTimeout(() => {
        result.style.display = "none";
    }, 4000);
});

