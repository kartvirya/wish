document.addEventListener('DOMContentLoaded', function() {
    const passwordSection = document.getElementById('password-section');
    const giftSection = document.getElementById('gift-section');
    const passwordInput = document.getElementById('password-input');
    const submitPasswordButton = document.getElementById('submit-password');
    const errorMessage = document.getElementById('error-message');
    
    const gifts = ['Gift 1', 'Gift 2', 'Gift 3', 'Gift 4', 'Gift 5'];
    const selectedGift = localStorage.getItem('selectedGift');
    const giftList = document.getElementById('gift-list');

    // Define the correct password
    const correctPassword = 'Aabha#321';  // Change this to your desired password

    // Check the password when the button is clicked
    submitPasswordButton.addEventListener('click', function() {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            passwordSection.style.display = 'none';
            giftSection.style.display = 'block';

            // Populate the gift list
            gifts.forEach(gift => {
                const listItem = document.createElement('li');
                listItem.textContent = gift;
                if (gift === selectedGift) {
                    listItem.classList.add('selected');
                }
                giftList.appendChild(listItem);
            });
        } else {
            errorMessage.style.display = 'block';
        }
    });

    if (!selectedGift) {
        document.querySelector('.wish-text').textContent = "No gift selected. Please spin the wheel first.";
    }
});
