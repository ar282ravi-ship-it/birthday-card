/* =========================================================
   BIRTHDAY CARD - COMPLETE SCRIPT
   ========================================================= */


/* =========================================================
   BACKGROUND HEARTS
   ========================================================= */

function createBackgroundHearts() {

    const container =
        document.getElementById("backgroundHearts");

    if (!container) {
        return;
    }

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨",
        "🤍",
        "🌸"
    ];

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("span");

        heart.innerText =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (Math.random() * 18 + 14) + "px";

        heart.style.animationDuration =
            (Math.random() * 5 + 7) + "s";

        heart.style.animationDelay =
            (Math.random() * 7) + "s";

        heart.style.opacity =
            (Math.random() * 0.35 + 0.15);

        container.appendChild(heart);
    }
}


/* =========================================================
   OPEN SURPRISE
   ========================================================= */

function openSurprise() {

    const opening =
        document.getElementById("openingScreen");

    const main =
        document.getElementById("mainExperience");

    const gift =
        document.getElementById("gift");

    const button =
        document.getElementById("openButton");

    if (!opening || !main || !gift || !button) {

        console.error(
            "Opening screen elements are missing."
        );

        return;
    }


    /* Prevent multiple clicks */

    button.disabled = true;


    /* Gift animation */

    gift.style.animation =
        "giftOpen 0.8s ease forwards";


    /* =====================================================
       MUSIC
       ===================================================== */

    const music =
        document.getElementById("birthdayMusic");

    if (music) {

        music.volume = 0.55;

        music.play().catch(function () {

            console.log(
                "Music autoplay was blocked by the browser."
            );

        });
    }


    /* =====================================================
       REVEAL MAIN EXPERIENCE
       ===================================================== */

    setTimeout(function () {

        opening.classList.add("hidden");

        main.classList.remove("hidden");


        /* Start name animation */

        startNameAnimation();


        /* Birthday confetti */

        createConfetti();


    }, 900);
}


/* =========================================================
   NAME ANIMATION
   =========================================================

   K
   Ka
   Kav
   Kavi
   Kavip
   Kavipr
   Kavipri
   Kavipriy
   Kavipriya

   Slower animation:
   650ms between each letter
   ========================================================= */

function startNameAnimation() {

    const nameElement =
        document.getElementById("nameAnimation");

    if (!nameElement) {

        console.error(
            "nameAnimation element was not found."
        );

        return;
    }


    const name =
        "Kavipriya";

    let currentLength = 0;


    /* Start after the birthday title appears */

    setTimeout(function typeNextLetter() {

        if (currentLength < name.length) {

            currentLength++;


            nameElement.innerText =
                name.substring(
                    0,
                    currentLength
                );


            /*
             * 650ms between each letter.
             *
             * This makes the animation much slower
             * and more noticeable.
             */

            setTimeout(
                typeNextLetter,
                650
            );
        }

    }, 1000);
}


/* =========================================================
   CONFETTI
   ========================================================= */

function createConfetti() {

    const emojis = [
        "🎉",
        "✨",
        "🎊",
        "💕",
        "❤️",
        "🎈",
        "🌸",
        "💖"
    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");


        piece.innerText =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        piece.style.position =
            "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            "-40px";

        piece.style.fontSize =
            (Math.random() * 18 + 15) + "px";

        piece.style.zIndex =
            "1000";

        piece.style.pointerEvents =
            "none";


        const duration =
            Math.random() * 3 + 3;


        piece.style.animation =
            `confettiFall ${duration}s linear`;


        document.body.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, duration * 1000);
    }
}


/* =========================================================
   MAKE A WISH
   =========================================================

   IMPORTANT:
   This version DOES NOT depend on a specific ID.

   It searches for:

       .wish-heart

   Therefore it won't crash with:

       Cannot read properties of null
       (reading 'dataset')
   ========================================================= */

function makeWish() {

    const heart =
        document.querySelector(".wish-heart");

    const finalSection =
        document.getElementById("finalSection");


    /* =====================================================
       SAFETY CHECKS
       ===================================================== */

    if (!heart) {

        console.error(
            "ERROR: .wish-heart was not found."
        );

        return;
    }


    if (!finalSection) {

        console.error(
            "ERROR: #finalSection was not found."
        );

        return;
    }


    /* =====================================================
       PREVENT MULTIPLE CLICKS
       ===================================================== */

    if (
        heart.dataset.clicked === "true"
    ) {

        return;
    }


    heart.dataset.clicked =
        "true";


    /* =====================================================
       HEART CLICK ANIMATION
       ===================================================== */

    heart.classList.add(
        "clicked"
    );


    /* =====================================================
       CREATE MAGICAL PARTICLE BURST
       ===================================================== */

    createWishParticles();


    /* =====================================================
       CREATE EXTRA CONFETTI
       ===================================================== */

    createConfetti();


    /* =====================================================
       REVEAL FINAL MESSAGE
       ===================================================== */

    setTimeout(function () {

        finalSection.classList.remove(
            "hidden"
        );


        /* Shooting stars */

        createShootingStars();


        /* Sparkles */

        createFinalSparkles();


        /* Scroll to final message */

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

function createWishParticles() {

    const symbols = [
        "❤️",
        "💕",
        "💖",
        "✨",
        "💗",
        "🌸",
        "⭐"
    ];


    const heart =
        document.querySelector(".wish-heart");


    if (!heart) {
        return;
    }


    const rect =
        heart.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("div");


        particle.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.className =
            "wish-particle";


        particle.style.position =
            "fixed";


        particle.style.left =
            centerX + "px";


        particle.style.top =
            centerY + "px";


        particle.style.fontSize =
            (Math.random() * 12 + 14) + "px";


        particle.style.zIndex =
            "2000";


        particle.style.pointerEvents =
            "none";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() *
            180 +
            70;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.style.setProperty(
            "--x",
            x + "px"
        );


        particle.style.setProperty(
            "--y",
            y + "px"
        );


        document.body.appendChild(
            particle
        );


        setTimeout(function () {

            particle.remove();

        }, 1600);
    }
}


/* =========================================================
   SHOOTING STARS
   ========================================================= */

function createShootingStars() {

    for (let i = 0; i < 12; i++) {

        setTimeout(function () {

            const star =
                document.createElement("div");


            star.className =
                "shooting-star";


            star.style.left =
                Math.random() * 100 + "vw";


            star.style.top =
                Math.random() * 60 + "vh";


            document.body.appendChild(
                star
            );


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

    const symbols = [
        "✨",
        "⭐",
        "💖",
        "💕",
        "🌸"
    ];


    for (let i = 0; i < 30; i++) {

        const sparkle =
            document.createElement("div");


        sparkle.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        sparkle.className =
            "final-sparkle";


        sparkle.style.left =
            Math.random() * 100 + "vw";


        sparkle.style.top =
            Math.random() * 100 + "vh";


        sparkle.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(
            sparkle
        );


        setTimeout(function () {

            sparkle.remove();

        }, 4500);
    }
}


/* =========================================================
   EXTRA ANIMATIONS
   ========================================================= */

const style =
    document.createElement("style");


style.innerHTML = `

/* =====================================================
   GIFT OPEN
   ===================================================== */

@keyframes giftOpen {

    0% {

        transform:
            scale(1)
            rotate(0deg);

        opacity: 1;
    }


    50% {

        transform:
            scale(1.4)
            rotate(-10deg);

        opacity: 1;
    }


    100% {

        transform:
            scale(0)
            rotate(20deg);

        opacity: 0;
    }

}


/* =====================================================
   CONFETTI FALL
   ===================================================== */

@keyframes confettiFall {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;
    }


    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;
    }

}


/* =====================================================
   WISH HEART CLICK
   ===================================================== */

.wish-heart.clicked {

    animation:
        heartDisappear 1.1s
        ease forwards;

}


@keyframes heartDisappear {

    0% {

        transform:
            scale(1);

        opacity: 1;

    }


    25% {

        transform:
            scale(1.4);

        opacity: 1;

    }


    60% {

        transform:
            scale(1.8);

        opacity: 0.7;

    }


    100% {

        transform:
            scale(0);

        opacity: 0;

    }

}


/* =====================================================
   WISH PARTICLES
   ===================================================== */

.wish-particle {

    animation:
        wishParticleBurst
        1.6s
        ease-out
        forwards;

}


@keyframes wishParticleBurst {

    0% {

        transform:
            translate(-50%, -50%)
            scale(0.5);

        opacity: 1;

    }


    100% {

        transform:
            translate(
                calc(-50% + var(--x)),
                calc(-50% + var(--y))
            )
            scale(1.2);

        opacity: 0;

    }

}


/* =====================================================
   SHOOTING STARS
   ===================================================== */

.shooting-star {

    position: fixed;

    width: 90px;

    height: 3px;

    background: white;

    border-radius: 50%;

    opacity: 0;

    transform:
        rotate(-35deg);

    z-index: 1500;

    pointer-events: none;

    animation:
        shootingStar
        1.5s
        ease-out
        forwards;

}


@keyframes shootingStar {

    0% {

        transform:
            translate(0, 0)
            rotate(-35deg);

        opacity: 0;

    }


    15% {

        opacity: 1;

    }


    100% {

        transform:
            translate(-350px, 350px)
            rotate(-35deg);

        opacity: 0;

    }

}


/* =====================================================
   FINAL SPARKLES
   ===================================================== */

.final-sparkle {

    position: fixed;

    font-size: 22px;

    z-index: 1200;

    pointer-events: none;

    animation:
        finalSparkleAnimation
        4s
        ease-in-out
        forwards;

}


@keyframes finalSparkleAnimation {

    0% {

        transform:
            scale(0)
            rotate(0deg);

        opacity: 0;

    }


    20% {

        transform:
            scale(1.2)
            rotate(90deg);

        opacity: 1;

    }


    60% {

        transform:
            scale(1)
            rotate(180deg);

        opacity: 0.8;

    }


    100% {

        transform:
            scale(0)
            rotate(360deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    style
);


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* Background hearts */

        createBackgroundHearts();


        /*
         * Attach the heart click through JavaScript.
         *
         * This means you DON'T need:
         *
         * onclick="makeWish()"
         *
         * in the HTML.
         */

        const heart =
            document.querySelector(
                ".wish-heart"
            );


        if (heart) {

            heart.addEventListener(
                "click",
                makeWish
            );

        } else {

            console.warn(
                "The .wish-heart element was not found on page load."
            );

        }

    }
);
