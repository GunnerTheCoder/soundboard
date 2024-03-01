// Define the audio files
const audioFiles = [
    { name: "india", src: "india.mp3" },
    { name: "notcare", src: "notcare.mp3" },
    { name: "glup", src: "gulp.mp3" },
    { name: "roches", src: "roches.mp3" },
    { name: "bang", src: "bang.mp3" },
    { name: "beep", src: "beep.mp3" },
    { name: "cap", src: "cap.mp3" },
    { name: "noor", src: "noor.mp3" },
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
