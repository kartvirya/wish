// Check if the wheel has been spun
let wheelSpun = false;

// Function to handle the spin action
document.getElementById('spinButton').addEventListener('click', function() {
    if (!wheelSpun) {
        const gifts = ['Gift 1', 'Gift 2', 'Gift 3', 'Gift 4', 'Gift 5'];
        const randomIndex = Math.floor(Math.random() * gifts.length);
        const result = gifts[randomIndex];

        // Disable the button after the first spin
        this.disabled = true;

        // Spin animation
        const wheel = document.getElementById('wheel');
        const degree = 3600 + (randomIndex * (360 / gifts.length));
        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${degree}deg)`;

        // Save the result to local storage
        localStorage.setItem('selectedGift', result);

        // Display result after spin
        setTimeout(() => {
            document.getElementById('result').innerHTML = `You got: ${result} <br><a href="reveal.html">Click here to see your gift!</a>`;
        }, 4000);

        // Set wheelSpun to true to prevent spinning again
        wheelSpun = true;
    } else {
        // Alert when trying to spin again
        alert("Sorry, you've already spun the wheel. You can only spin once!");
    }
});
