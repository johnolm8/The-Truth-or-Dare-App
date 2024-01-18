window.onload = function() {
    var truths = [
        "What is your biggest fear?",
        "What's something you're glad your mum doesn't know about you?",
        "Have you ever cheated on a test?",
        "What is the most embarrassing thing you've ever done?",
        "What's the worst gift you've ever received?",
        // Add as many truths as you like
    ];

    var randomTruth = truths[Math.floor(Math.random() * truths.length)];
    document.getElementById('resultScreen').innerHTML = `<h1>${randomTruth}</h1>`;
};
