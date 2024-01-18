window.onload = function() {
    var dares = [
        "Lick a shoe.",
        "Dance with no music for 2 minutes.",
        "Let someone draw on your face with a pen.",
        "Do 10 pushups.",
        "Sing a song loudly in a public place.",
        // Add as many dares as you like
    ];

    var randomDare = dares[Math.floor(Math.random() * dares.length)];
    document.getElementById('resultScreen').innerHTML = `<h1>${randomDare}</h1>`;
};
