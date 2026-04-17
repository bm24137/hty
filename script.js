function changeMessage() {
    const message = document.getElementById("message");
    
    const messages = [
        "🔥 You clicked the button!",
        "💡 This is JavaScript working!",
        "🎉 Your site is live!",
        "🚀 You're ready for bigger projects!"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
}