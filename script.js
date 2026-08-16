function openCard() {

    // Hide opening screen
    document
        .getElementById("openingScreen")
        .classList.add("hidden");


    // Show birthday card
    document
        .getElementById("birthdayCard")
        .classList.remove("hidden");


    // Try to play music
    const music =
        document.getElementById("birthdayMusic");

    music.play().catch(function () {

        console.log(
            "Browser blocked automatic music playback."
        );

    });


    // Start confetti
    createConfetti();

}


/* ========================= */
/* CONFETTI */
/* ========================= */

function createConfetti() {

    const emojis = [
        "🎉",
        "✨",
        "🎊",
        "❤️",
        "💕",
        "🎈"
    ];


    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");


        confetti.innerText =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        confetti.style.zIndex = "999";

        confetti.style.pointerEvents = "none";


        const duration =
            Math.random() * 3 + 3;


        confetti.style.animation =
            `confettiFall ${duration}s linear`;


        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, duration * 1000);

    }

}