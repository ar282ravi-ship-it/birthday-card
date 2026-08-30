/* ================================================= */
/* BACKGROUND HEARTS */
/* ================================================= */

function createBackgroundHearts() {

    const container =
        document.getElementById(
            "backgroundHearts"
        );


    const hearts = [

        "❤️",
        "💕",
        "💗",
        "✨",
        "🤍"

    ];


    for (
        let i = 0;
        i < 22;
        i++
    ) {


        const heart =
            document.createElement(
                "span"
            );


        heart.innerText =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 +
            "vw";


        heart.style.fontSize =
            (
                Math.random() * 18 +
                15
            ) + "px";


        heart.style.animationDuration =
            (
                Math.random() * 5 +
                7
            ) + "s";


        heart.style.animationDelay =
            (
                Math.random() * 7
            ) + "s";


        container.appendChild(
            heart
        );

    }

}


createBackgroundHearts();



/* ================================================= */
/* OPEN SURPRISE */
/* ================================================= */

function openSurprise() {


    const opening =
        document.getElementById(
            "openingScreen"
        );


    const main =
        document.getElementById(
            "mainExperience"
        );


    const gift =
        document.getElementById(
            "gift"
        );


    const button =
        document.getElementById(
            "openButton"
        );


    /* Prevent multiple clicks */

    button.disabled = true;


    /* Gift opening animation */

    gift.style.animation =
        "giftOpen 0.9s ease forwards";


    /* Start music */

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    music.play().catch(function () {

        console.log(
            "Music playback was blocked."
        );

    });


    /* Reveal main experience */

    setTimeout(function () {


        opening.classList.add(
            "hidden"
        );


        main.classList.remove(
            "hidden"
        );


        /*
         * Start the slow
         * Kavipriya animation.
         */

        startNameAnimation();


        /* Celebration */

        createConfetti();


    }, 900);

}



/* ================================================= */
/* NAME ANIMATION */
/* ================================================= */

function startNameAnimation() {


    const nameElement =
        document.getElementById(
            "nameAnimation"
        );


    const name =
        "Kavipriya";


    let currentLength = 0;


    function typeNextLetter() {


        if (
            currentLength <
            name.length
        ) {


            currentLength++;


            nameElement.innerText =
                name.substring(
                    0,
                    currentLength
                );


            /*
             * 600 milliseconds
             * between each letter.
             *
             * K
             * Ka
             * Kav
             * Kavi
             * ...
             */

            setTimeout(
                typeNextLetter,
                600
            );

        }

    }


    /*
     * Wait a little after
     * the birthday screen appears.
     */

    setTimeout(
        typeNextLetter,
        700
    );

}



/* ================================================= */
/* CONFETTI */
/* ================================================= */

function createConfetti() {


    const emojis = [

        "🎉",
        "✨",
        "🎊",
        "💕",
        "❤️",
        "🎈",
        "🌸"

    ];


    for (
        let i = 0;
        i < 70;
        i++
    ) {


        const piece =
            document.createElement(
                "div"
            );


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
            Math.random() * 100 +
            "vw";


        piece.style.top =
            "-40px";


        piece.style.fontSize =
            (
                Math.random() * 17 +
                15
            ) + "px";


        piece.style.zIndex =
            "1000";


        piece.style.pointerEvents =
            "none";


        const duration =
            Math.random() * 3 + 3;


        piece.style.animation =
            `confettiFall ${duration}s linear`;


        document.body.appendChild(
            piece
        );


        setTimeout(function () {

            piece.remove();

        }, duration * 1000);

    }

}



/* ================================================= */
/* MAKE A WISH */
/* ================================================= */

function makeWish() {


    const heart =
        document.getElementById(
            "wishHeart"
        );


    const finalSection =
        document.getElementById(
            "finalSection"
        );


    /*
     * Prevent multiple clicks.
     */

    if (
        heart.dataset.clicked ===
        "true"
    ) {

        return;

    }


    heart.dataset.clicked =
        "true";


    /*
     * Start heart animation.
     */

    heart.classList.add(
        "clicked"
    );


    /*
     * Create a small burst
     * around the heart.
     */

    createWishParticles();


    /*
     * After the heart disappears,
     * reveal the magical final section.
     */

    setTimeout(function () {


        finalSection.classList.remove(
            "hidden"
        );


        /*
         * Create the shooting stars
         * after the final screen exists.
         */

        createShootingStars();


        /*
         * Create magical sparkles.
         */

        createFinalSparkles();


        /*
         * Scroll to the final message.
         */

        setTimeout(function () {


            finalSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });


        }, 150);


    }, 1200);

}



/* ================================================= */
/* WISH PARTICLES */
/* ================================================= */

function createWishParticles() {


    const particles = [

        "❤️",
        "💕",
        "✨",
        "💗",
        "🌸"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {


        const particle =
            document.createElement(
                "div"
            );


        particle.innerText =
            particles[
                Math.floor(
                    Math.random() *
                    particles.length
                )
            ];


        particle.style.position =
            "fixed";


        particle.style.left =
            "50%";


        particle.style.top =
            "55%";


        particle.style.zIndex =
            "1000";


        particle.style.pointerEvents =
            "none";


        particle.style.fontSize =
            (
                Math.random() * 15 +
                15
            ) + "px";


        const angle =
            Math.random() *
            Math.PI * 2;


        const distance =
            Math.random() * 250 +
            80;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.3)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1000 +
                    Math.random() * 800,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        document.body.appendChild(
            particle
        );


        setTimeout(function () {

            particle.remove();

        }, 2000);

    }

}



/* ================================================= */
/* SHOOTING STARS */
/* ================================================= */

function createShootingStars() {


    const container =
        document.getElementById(
            "shootingStars"
        );


    for (
        let i = 0;
        i < 5;
        i++
    ) {


        setTimeout(function () {


            const star =
                document.createElement(
                    "div"
                );


            star.className =
                "shooting-star";


            star.style.top =
                (
                    Math.random() * 50 +
                    5
                ) + "%";


            star.style.animationDuration =
                (
                    Math.random() * 1 +
                    1.2
                ) + "s";


            container.appendChild(
                star
            );


            setTimeout(function () {

                star.remove();

            }, 2000);


        }, i * 700);

    }

}



/* ================================================= */
/* FINAL SPARKLES */
/* ================================================= */

function createFinalSparkles() {


    const container =
        document.getElementById(
            "finalSparkles"
        );


    const sparkleCharacters = [

        "✨",
        "✦",
        "⋆",
        "💫"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {


        setTimeout(function () {


            const sparkle =
                document.createElement(
                    "div"
                );


            sparkle.className =
                "final-sparkle";


            sparkle.innerText =
                sparkleCharacters[
                    Math.floor(
                        Math.random() *
                        sparkleCharacters.length
                    )
                ];


            sparkle.style.left =
                Math.random() * 100 +
                "%";


            sparkle.style.top =
                Math.random() * 100 +
                "%";


            sparkle.style.animationDuration =
                (
                    Math.random() * 2 +
                    2
                ) + "s";


            container.appendChild(
                sparkle
            );


            setTimeout(function () {

                sparkle.remove();

            }, 4000);


        }, i * 120);

    }

}



/* ================================================= */
/* EXTRA ANIMATIONS */
/* ================================================= */

const dynamicStyle =
    document.createElement(
        "style"
    );


dynamicStyle.innerHTML = `

@keyframes giftOpen {

    0% {

        transform:
            scale(1)
            rotate(0deg);

    }

    40% {

        transform:
            scale(1.35)
            rotate(-8deg);

    }

    100% {

        transform:
            scale(0)
            rotate(20deg);

        opacity: 0;

    }

}


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

`;


document.head.appendChild(
    dynamicStyle
);
