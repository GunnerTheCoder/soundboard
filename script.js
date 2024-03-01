// Define the audio files
const audioFiles = [
    { name: "sound1", src: "sound1.mp3" },
    { name: "sound2", src: "sound2.mp3" },
    // Add more audio files as needed
];

// Function to create buttons dynamically
function createButtons() {
    const buttonsContainer = document.querySelector('.buttons');

    audioFiles.forEach(file => {
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = 'button.png';
        button.appendChild(img);
        button.addEventListener('click', () => {
            const audio = new Audio(file.src);
            audio.play();
        });
        buttonsContainer.appendChild(button);
    });
}

// Call the function to create buttons when the page loads
window.onload = createButtons;
