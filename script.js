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


    for (let i = 0; i < 20; i++) {

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
            (Math.random() * 20 + 15) + "px";


        heart.style.animationDuration =
            (Math.random() * 5 + 6) + "s";


        heart.style.animationDelay =
            (Math.random() * 5) + "s";


        container.appendChild(heart);

    }

}


createBackgroundHearts();



/* ================================================= */
/* OPEN SURPRISE */
/* ================================================= */

function openSurprise() {

    const opening =
        document.getElementById("openingScreen");


    const main =
        document.getElementById("mainExperience");


    const gift =
        document.getElementById("gift");


    const button =
        document.getElementById("openButton");


    /* Prevent double click */

    button.disabled = true;


    /* Gift animation */

    gift.style.animation =
        "giftOpen 0.8s ease forwards";


    /* Play music */

    const music =
        document.getElementById("birthdayMusic");


    music.play().catch(function () {

        console.log(
            "Music autoplay was blocked."
        );

    });


    /* Small delay for dramatic reveal */

    setTimeout(function () {

        opening.classList.add("hidden");

        main.classList.remove("hidden");


        /* Start name animation */

        startNameAnimation();


        /* Confetti */

        createConfetti();

    }, 900);

}



/* ================================================= */
/* NAME ANIMATION */
/* ================================================= */

function startNameAnimation() {

    const nameElement =
        document.getElementById("nameAnimation");


    const name =
        "Kavipriya";


    /*
       Exact sequence:

       K
       Ka
       Kav
       Kavi
       Kavip
       Kavipr
       Kavipri
       Kavipriy
       Kavipriya
    */


    let currentLength = 0;


    function typeNextLetter() {

        if (currentLength < name.length) {

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


        document.body.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, duration * 1000);

    }

}



/* ================================================= */
/* CAKE / WISH */
/* ================================================= */

function makeWish() {

    const flame =
        document.getElementById("flame");


    const button =
        document.getElementById("wishButton");


    /* Put out candle */

    flame.innerText = "💨";


    flame.style.animation =
        "none";


    button.innerText =
        "Wish Made ❤️";


    button.disabled =
        true;


    /* Celebration */

    createConfetti();


    /* Reveal final message */

    setTimeout(function () {

        const finalSection =
            document.getElementById("finalSection");


        finalSection.classList.remove(
            "hidden"
        );


        finalSection.scrollIntoView({

            behavior: "smooth"

        });

    }, 1800);

}



/* ================================================= */
/* ADDITIONAL GIFT ANIMATION */
/* ================================================= */

const style =
    document.createElement("style");


style.innerHTML = `

@keyframes giftOpen {

    0% {

        transform:
            scale(1)
            rotate(0);

    }

    50% {

        transform:
            scale(1.4)
            rotate(-10deg);

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


document.head.appendChild(style);
