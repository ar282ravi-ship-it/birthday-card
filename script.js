/* =========================================================
   BIRTHDAY CARD - FINAL SCRIPT
   ========================================================= */

let wishTriggered = false;


/* =========================================================
   BACKGROUND HEARTS
   ========================================================= */

function createBackgroundHearts() {
    const container = document.getElementById("backgroundHearts");

    if (!container) return;

    const hearts = ["❤️", "💕", "💗", "💖", "✨", "🤍", "🌸"];

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("span");

        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 18 + 14 + "px";
        heart.style.animationDuration = Math.random() * 5 + 7 + "s";
        heart.style.animationDelay = Math.random() * 7 + "s";
        heart.style.opacity = Math.random() * 0.35 + 0.15;

        container.appendChild(heart);
    }
}


/* =========================================================
   OPEN SURPRISE
   ========================================================= */

function openSurprise() {
    const opening = document.getElementById("openingScreen");
    const main = document.getElementById("mainExperience");
    const gift = document.getElementById("gift");
    const button = document.getElementById("openButton");

    if (!opening || !main || !gift || !button) {
        console.error("Opening screen elements are missing.");
        return;
    }

    button.disabled = true;
    gift.style.animation = "giftOpen 0.8s ease forwards";

    const music = document.getElementById("birthdayMusic");

    if (music) {
        music.volume = 0.55;
        music.play().catch(function () {
            console.log("Music autoplay was blocked by the browser.");
        });
    }

    setTimeout(function () {
        opening.classList.add("hidden");
        main.classList.remove("hidden");
        startNameAnimation();
        createConfetti();
    }, 900);
}


/* =========================================================
   SLOW NAME ANIMATION
   ========================================================= */

function startNameAnimation() {
    const nameElement = document.getElementById("nameAnimation");

    if (!nameElement) {
        console.error("nameAnimation element was not found.");
        return;
    }

    const name = "Kavipriya";
    let currentLength = 0;

    nameElement.textContent = "";

    setTimeout(function typeNextLetter() {
        if (currentLength >= name.length) return;

        currentLength++;
        nameElement.textContent = name.substring(0, currentLength);

        // 650ms between letters = deliberately slower animation
        setTimeout(typeNextLetter, 650);
    }, 1000);
}


/* =========================================================
   CONFETTI
   ========================================================= */

function createConfetti() {
    const emojis = ["🎉", "✨", "🎊", "💕", "❤️", "🎈", "🌸", "💖"];

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement("div");
        const duration = Math.random() * 3 + 3;

        piece.className = "confetti-piece";
        piece.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.fontSize = Math.random() * 18 + 15 + "px";
        piece.style.animationDuration = duration + "s";

        document.body.appendChild(piece);

        setTimeout(function () {
            piece.remove();
        }, duration * 1000);
    }
}


/* =========================================================
   MAKE A WISH
   ========================================================= */

function makeWish() {
    const heart = document.getElementById("wishHeart");
    const finalSection = document.getElementById("finalSection");

    if (!heart) {
        console.error("ERROR: #wishHeart was not found.");
        return;
    }

    if (!finalSection) {
        console.error("ERROR: #finalSection was not found.");
        return;
    }

    // No dataset access. This avoids the null.dataset error completely.
    if (wishTriggered) return;
    wishTriggered = true;

    heart.classList.add("clicked");

    createWishParticles(heart);
    createConfetti();

    setTimeout(function () {
        finalSection.classList.remove("hidden");
        createShootingStars();
        createFinalSparkles();

        setTimeout(function () {
            finalSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 150);
    }, 1200);
}


/* =========================================================
   WISH PARTICLES
   ========================================================= */

function createWishParticles(heart) {
    const symbols = ["❤️", "💕", "💖", "✨", "💗", "🌸", "⭐"];
    const rect = heart.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 35; i++) {
        const particle = document.createElement("div");
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 180 + 70;

        particle.className = "wish-particle";
        particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = centerX + "px";
        particle.style.top = centerY + "px";
        particle.style.fontSize = Math.random() * 12 + 14 + "px";
        particle.style.setProperty("--x", Math.cos(angle) * distance + "px");
        particle.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(particle);

        setTimeout(function () {
            particle.remove();
        }, 1600);
    }
}


/* =========================================================
   SHOOTING STARS
   ========================================================= */

function createShootingStars() {
    const container = document.getElementById("shootingStars");

    if (!container) return;

    for (let i = 0; i < 12; i++) {
        setTimeout(function () {
            const star = document.createElement("div");
            star.className = "shooting-star";
            container.appendChild(star);

            setTimeout(function () {
                star.remove();
            }, 1800);
        }, i * 180);
    }
}


/* =========================================================
   FINAL SPARKLES
   ========================================================= */

function createFinalSparkles() {
    const container = document.getElementById("finalSparkles");

    if (!container) return;

    const symbols = ["✨", "⭐", "💖", "💕", "🌸"];

    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement("div");

        sparkle.className = "final-sparkle";
        sparkle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";
        sparkle.style.animationDelay = Math.random() * 2 + "s";

        container.appendChild(sparkle);

        setTimeout(function () {
            sparkle.remove();
        }, 4500);
    }
}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    createBackgroundHearts();

    const openButton = document.getElementById("openButton");
    const heart = document.getElementById("wishHeart");

    if (openButton) {
        openButton.addEventListener("click", openSurprise);
    }

    if (heart) {
        heart.addEventListener("click", makeWish);

        heart.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                makeWish();
            }
        });
    }
});
