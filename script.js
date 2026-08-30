/* ================================================= */
/* BACKGROUND HEARTS */
/* ================================================= */

function createBackgroundHearts() {

    const container =
        document.getElementById("backgroundHearts");


    const hearts = [

        "❤️",
        "💕",
        "💗",
        "✨",
        "🤍"

    ];


    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("span");


        heart.innerText =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (Math.random() * 20 + 15)
            + "px";


        heart.style.animationDuration =
            (Math.random() * 5 + 7)
            + "s";


        heart.style.animationDelay =
            (Math.random() * 7)
            + "s";


        container.appendChild(heart);

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


    /* Prevent double clicking */

    button.disabled = true;


    /* Animate gift */

    gift.style.animation =
        "giftOpen 0.8s ease forwards";


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


    /* Reveal main page */

    setTimeout(function () {


        opening.classList.add(
            "hidden"
        );


        main.classList.remove(
            "hidden"
        );


        /* Start name animation */

        startNameAnimation();


        /* Initial celebration */

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


            setTimeout(
                typeNextLetter,
                350
            );

        }

    }


    /* Start after page appears */

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
        i < 80;
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
            Math.random() * 100
            + "vw";


        piece.style.top =
            "-40px";


        piece.style.fontSize =
            (Math.random() * 18 + 15)
            + "px";


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

    const flame =
        document.getElementById("flame");

    const finalSection =
        document.getElementById("finalSection");


    /* Prevent multiple clicks */

    if (flame.dataset.blown === "true") {
        return;
    }


    flame.dataset.blown = "true";


    /* Blow out the candle */

    flame.innerText = "💨";

    flame.style.animation = "none";

    flame.style.cursor = "default";


    /* Small celebration */

    createConfetti();


    /*
       Wait for the smoke effect,
       then reveal the final message.
    */

    setTimeout(function () {

        finalSection.classList.remove("hidden");

        /*
           Give the browser a moment to
           render the section before scrolling.
        */

        setTimeout(function () {

            finalSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }, 1200);

}
