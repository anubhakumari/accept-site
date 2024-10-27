// Wait for the DOM to fully load before running the JavaScript
document.addEventListener('DOMContentLoaded', function () {
    
    // Get references to the HTML elements that will be used
    const noBtn = document.getElementById('noBtn'); // The "No" button
    const yesBtn = document.getElementById('yesBtn'); // The "Yes" button
    const container = document.querySelector('.container'); // The initial question container
    const secondPage = document.getElementById('secondPage'); // The second page container

    /* Event Listener: When the mouse hovers over the "No" button */
    noBtn.addEventListener('mouseover', function () {
        // Generate random X and Y positions based on the window size
        const x = Math.floor(Math.random() * window.innerWidth); // Random X position
        const y = Math.floor(Math.random() * window.innerHeight); // Random Y position
        
        // Add the class to animate the button movement
        noBtn.classList.add('moving');
        // Set the button's new position
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });

    /* Event Listener: When the "Yes" button is clicked */
    yesBtn.addEventListener('click', function () {
        // Hide the initial container (question and buttons)
        container.classList.add('hidden');
        // Show the second page (new message and GIF)
        secondPage.classList.remove('hidden');
    });
});
