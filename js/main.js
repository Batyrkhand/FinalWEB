const buyButtons = document.querySelectorAll(".btn-dark");
const modal = document.getElementById("buyModal");
const purchaseForm = document.getElementById("purchaseForm");
const cardNumberInput = document.getElementById("cardNumber");
const cvvInput = document.getElementById("cvv");
const expiryDateInput = document.getElementById("expiryDate");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

const closeModalButton = document.getElementById("modBut");

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});


purchaseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const cardNumber = cardNumberInput.value;
    const cvv = cvvInput.value;
    const expiryDate = expiryDateInput.value;

    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Please enter the correct card number (16 digits).");
        return;
    }

    if (!/^\d{3}$/.test(cvv)) {
        alert("Please enter a valid CVV (3 digits).");
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert("Please enter a valid expiration date (mm/yy).");
        return;
    }
    

    
    alert("Succesfully!");
    modal.style.display = "none";
});

expiryDateInput.addEventListener("input", function () {
    const value = expiryDateInput.value;
    if (value.length === 2 && !value.includes("/")) {
        expiryDateInput.value = value + "/";
    }
});






var countDownDate = new Date("December 15, 2023 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;
function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) ; 
    showSlide(currentIndex);
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 3) ; 
    showSlide(currentIndex);
});
showSlide(currentIndex);

let currentSlide = 0;
const sliderImage = document.getElementById("slider-image");

function showSlide() {
    sliderImage.src = sliderImages[currentSlide];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    showSlide();
}


showSlide();


const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);


const autoSlideInterval = 5;
let autoSlideTimer;

function startAutoSlide() {
    autoSlideTimer = setInterval(nextSlide, autoSlideInterval);
}

function stopAutoSlide() {
    clearInterval(autoSlideTimer);
}


startAutoSlide();


const sliderContainer = document.getElementById("slider-container");
sliderContainer.addEventListener("mouseenter", stopAutoSlide);
sliderContainer.addEventListener("mouseleave", startAutoSlide);

function toggleText() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btn = document.getElementById("btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.textContent = "More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.textContent = "Less";
    }
}
const registerLoginButton = document.getElementById("registerLoginButton");

registerLoginButton.addEventListener("click", () => {
    window.location.href = "registration.html";
});

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    const userNameElement = document.getElementById("userName");
    userNameElement.textContent = user.name;
    const userEmailElement = document.getElementById("userEmail");
    userEmailElement.textContent = user.email;
    const userAccountSection = document.querySelector(".user-info");
    userAccountSection.style.display = "block";
    const logOutButton = document.getElementById("logOutButton");
    logOutButton.addEventListener("click", function () {
        localStorage.removeItem("user");
        window.location.href = "index.html";
    });
}
