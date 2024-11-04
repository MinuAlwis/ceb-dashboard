// Step 1: Function to open a new window
function openNewWindow(url) {
    window.open(url, '_blank');
}

// // 2: Create falling emoji elements for seasonal effects
// function createFallingEmojis(emoji, count = 50) {
//     const body = document.body;
//     const emojiContainer = document.createElement('div');
//     emojiContainer.classList.add('falling-container');
//     body.appendChild(emojiContainer);

//     for (let i = 0; i < count; i++) {
//         const emojiElement = document.createElement('div');
//         emojiElement.classList.add('falling-emoji');
//         emojiElement.textContent = emoji;
//         emojiContainer.appendChild(emojiElement);
//         emojiElement.style.left = Math.random() * 100 + 'vw';
//         emojiElement.style.animationDuration = (Math.random() * 5 + 5) + 's';
//     }
// }

// // 3: Apply seasonal effects based on the current date
// function applySeasonalEffect() {
//     const now = new Date();
//     const month = now.getMonth(); // January is 0, December is 11
//     const day = now.getDate();    // Day of the month

//     switch (`${month}-${day}`) {
//         case '0-14': // January 14 - Thai Pongal
//             createFallingEmojis('🌾');
//             break;
//         case '1-4': // February 4 - Sri Lankan Independence Day
//             createFallingEmojis('🇱🇰');
//             break;
//         case '2-11': // March 11 - Maha Shivaratri
//             createFallingEmojis('✨');
//             break;
//         case '3-14': // April 14 - New Year
//             createFallingEmojis('🎇');
//             break;
//         case '4-5': // May 5 - Vesak
//             createFallingEmojis('🌼');
//             break;
//         case '5-24': // June 24 - Poson
//             createFallingEmojis('🌻');
//             break;
//         case '7-25': // August 25 - Kandy Esala Perahera
//             createFallingEmojis('🌼');
//             break;
//         case '9-1': // October 1 - Children's and Elders' Day
//             createFallingEmojis('👨‍👩‍👧‍👦');
//             break;
//         case '10-12': // November 12 - Deepavali
//             createFallingEmojis('🪔');
//             break;
//         case '11-25': // December 25 - Christmas
//             createFallingEmojis('❄️ 🌲');
//             break;
//         default:
//             break;
//     }
// }

// // Function to create falling images instead of emojis
// function createFallingImages(imageList, count = 40) {
//     const body = document.body;
//     const imageContainer = document.createElement('div');
//     imageContainer.classList.add('falling-container');
//     body.appendChild(imageContainer);

//     for (let i = 0; i < count; i++) {
//         const imageElement = document.createElement('img');
//         imageElement.classList.add('falling-image');
//         imageElement.src = imageList[Math.floor(Math.random() * imageList.length)]; // Randomly select an image
//         imageContainer.appendChild(imageElement);
        
//         // Randomize initial position and animation duration
//         imageElement.style.left = Math.random() * 250 + 'vw';
//         imageElement.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random duration between 5 and 10 seconds
//     }
// }

// // Function to apply seasonal effects based on date
// function applySeasonalEffect() {
//     const now = new Date();
//     const month = now.getMonth(); // January is 0, December is 11
//     const day = now.getDate();    // Day of the month

//     switch (`${month}-${day}`) {
//         case '0-14': // January 14 - Thai Pongal
//             createFallingImages(['images/thaipongal.png']);
//             break;
//         case '1-4': // February 4 - Sri Lankan Independence Day
//             createFallingImages(['images/independenceday1.png']);
//             break;
//         case '2-11': // March 11 - Maha Shivaratri
//             createFallingImages(['images/mahasivarathri1.png']);
//             break;
//         case '9-16': // April 14 - New Year
//             createFallingImages(['images/sinhala&tamlinewyear1.png', 'images/sinhalatamilnewyear2.png']);
//             break;
//         case '4-5': // May 5 - Vesak
//             createFallingImages(['images/vesak3.png']);
//             break;
//         case '5-24': // June 24 - Poson
//             createFallingImages(['images/poson2.png']);
//             break;
//         case '7-25': // August 25 - Kandy Esala Perahera
//             createFallingImages(['images/esalaperahara1.png']);
//             break;
//         case '9-1': // October 1 - Children's and Elders' Day
//             createFallingImages(['images/children&elderday1.png', '']);
//             break;
//         case '10-12': // November 12 - Deepavali
//             createFallingImages(['images/diwali1.png', '']);
//             break;
//         case '11-25': // December 25 - Christmas
//             createFallingImages(['images/christmas1.png', 'images/christmas2.png']);
//             break;
//         default:
//             break;
//     }
// }

// Function to create images or videos with custom animations
function createEffect(type, media, count = 40) {
    const body = document.body;
    const effectContainer = document.createElement('div');
    effectContainer.classList.add('effect-container');
    body.appendChild(effectContainer);

    if (type === 'falling') {
        for (let i = 0; i < count; i++) {
            const mediaSource = media[Math.floor(Math.random() * media.length)];
            let mediaElement;

            // Check if media is an .mp4 video or an image
            if (mediaSource.endsWith('.mp4')) {
                mediaElement = document.createElement('video');
                mediaElement.classList.add('falling-video');
                mediaElement.src = mediaSource;
                mediaElement.autoplay = true;
                mediaElement.loop = true;
                mediaElement.muted = true; // Mute video for ambient effect
            } else {
                mediaElement = document.createElement('img');
                mediaElement.classList.add('falling-image');
                mediaElement.src = mediaSource;
            }

            effectContainer.appendChild(mediaElement);
            mediaElement.style.left = Math.random() * 250 + 'vw';
            mediaElement.style.animationDuration = (Math.random() * 5 + 5) + 's';
        }
    } else if (type === 'side') {
        const mediaElement = media[0].endsWith('.mp4') ? document.createElement('video') : document.createElement('img');
        mediaElement.classList.add('side-image');
        mediaElement.src = media[0];
        if (media[0].endsWith('.mp4')) {
            mediaElement.autoplay = true;
            mediaElement.loop = true;
            mediaElement.muted = true;
        }
        effectContainer.appendChild(mediaElement);
    } else if (type === 'sliding') {
        const mediaElement = media[0].endsWith('.mp4') ? document.createElement('video') : document.createElement('img');
        mediaElement.classList.add('sliding-image');
        mediaElement.src = media[0];
        if (media[0].endsWith('.mp4')) {
            mediaElement.autoplay = true;
            mediaElement.loop = true;
            mediaElement.muted = true;
        }
        effectContainer.appendChild(mediaElement);
    } else if (type === 'running') {
        const mediaElement = media[0].endsWith('.mp4') ? document.createElement('video') : document.createElement('img');
        mediaElement.classList.add('running-image');
        mediaElement.src = media[0];
        if (media[0].endsWith('.mp4')) {
            mediaElement.autoplay = true;
            mediaElement.loop = true;
            mediaElement.muted = true;
        }
        effectContainer.appendChild(mediaElement);
    } else if (type === 'play') {
        for (let i = 0; i < count; i++) {
            const mediaSource = media[Math.floor(Math.random() * media.length)];
            const mediaElement = document.createElement('img');
            mediaElement.classList.add('playing-image');
            mediaElement.src = mediaSource;
            effectContainer.appendChild(mediaElement);
        }
    } else if(type === 'popup') {
        const imageElement = document.createElement('img');
        imageElement.classList.add('popup-gif'); // Specific class for pop-up effect
        imageElement.src = sources[0];
        effectContainer.appendChild(imageElement);
    }
}

// Function to create images with custom animations
function createEffect(type, media, width = '5px', height = '5px', count = 1) {
    const body = document.body;
    const effectContainer = document.createElement('div');
    effectContainer.classList.add('effect-container');
    body.appendChild(effectContainer);

    if (type === 'falling') {
        for (let i = 0; i < count; i++) {
            const mediaSource = media[Math.floor(Math.random() * media.length)];
            const mediaElement = document.createElement('img');
            mediaElement.classList.add('falling-image');
            mediaElement.src = mediaSource;

            effectContainer.appendChild(mediaElement);
            mediaElement.style.left = Math.random() * 60 + 'vw';
            mediaElement.style.animationDuration = (Math.random() * 8 + 8) + 's';
        }
    } else if (type === 'popup-left' || type === 'popup-right') {
        const imageElement = document.createElement('img');
        imageElement.classList.add('popup-image');

        // Apply specific class for left or right positioning
        if (type === 'popup-left') {
            imageElement.classList.add('bottom-left');
        } else if (type === 'popup-right') {
            imageElement.classList.add('bottom-right');
        }

        imageElement.src = media[0];
        imageElement.style.width = width;
        imageElement.style.height = height;
        effectContainer.appendChild(imageElement);

    } else if (type === 'sliding') {
        const imageElement = document.createElement('img');
        imageElement.classList.add('sliding-image');
        imageElement.src = media[0];
        effectContainer.appendChild(imageElement);
    }
}

// Function to apply seasonal effects based on specific dates
function applySeasonalEffect() {
    const now = new Date();
    const month = now.getMonth(); // January is 0, December is 11
    const day = now.getDate();    // Day of the month

    switch (`${month}-${day}`) {
        case '0-14': // January 14 - Thai Pongal
            createEffect('popup-left', ['images/thaipongal.png'],'200px', '250px');
            break;
        case '1-4': // February 4 - Independence Day with Sri Lankan flag pop-up
            createEffect('popup', ['images/srilankaflag.gif']);
            break;
        case '3-14': // April 14 - Sinhala and Tamil New Year
            createEffect('falling', ['images/fireworks2.gif'], 6);
            break;
        case '4-5': // May 5 - Vesak, sliding vesak lantern
            createEffect('sliding', ['images/vesak3.png']);
            break;
        case '5-24': // June 24 - Poson
            createEffect('falling', ['images/vesak3.png'], 20);
            break;
        case '7-25': // August 25 - Kandy Esala Perahera, sliding perahara
            createEffect('sliding', ['images/perahara.png']);
            break;
        case '11-25': // December 25 - Christmas, snowflakes falling
            createEffect('falling', ['images/snow.png'], 25);
            createEffect('popup-right', ['images/christmas tree.png'], '200px', '250px');
            break;
        default:
            break;
    }
}


// Call the applySeasonalEffect function to trigger the effect
applySeasonalEffect();


// 4: Function to show a message box
function showMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');

    const closeButton = document.createElement('span');
    closeButton.classList.add('message-box-close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => messageBox.style.display = 'none';

    const messageContent = document.createElement('p');
    messageContent.textContent = message;

    messageBox.appendChild(closeButton);
    messageBox.appendChild(messageContent);
    document.body.appendChild(messageBox);

    messageBox.style.display = 'block';
}

// 5: Determine special days and show corresponding messages
function showSpecialDayMessages() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();

    const messages = [];

    if (month === 0) { // January
        if (day === 1) messages.push('Wish you good luck✨');
        if (day === 14) messages.push('Happy Thai Pongal!');
    } else if (month === 1) { // February
        if (day === 4) messages.push('Happy Independence Day!');
        if (day === 14) messages.push('Happy Valentine\'s Day💞');
    } else if (month === 2 && day === 11) { // March 11
        //messages.push('Happy Maha Shivarathri!');
    } else if (month === 3 && day === 14) { // April 14
        messages.push('Wish you a New Year blessed with love, happiness, and prosperity 🌞🎇🙏🏻');
    } else if (month === 4) { // May
        if (day === 6) messages.push('Happy Vesak Day! May peace be your journey');
        if (day === 12) messages.push('Happy Mother\'s Day👩‍👧‍👦🩷');
    } else if (month === 5) { // June
        if (day === 5) messages.push('May This Poson Bring Peace and Happiness 🌕');
        if (now.getDay() === 0 && day > 14 && day < 22) messages.push('Happy Father\'s Day👨‍👧‍👦🩷');
    } else if (month === 6) { // July
        //if (day === 7) messages.push('Happy Friendship Day🍻');
    } else if (month === 7 && day === 9) { // August 1
    //     messages.push('Stay happy as always🥰😄👻');
    } else if (month === 8) { // October
        if (day === 1) messages.push('Happy Children Day🥳 & Happy Elders Day🎉👨‍👩‍👧‍👦');
        if (day === 6) messages.push('Happy Teachers Day👩🏻‍🏫👨🏻‍🏫');
        if (day === 20) messages.push('Happy Deepavali🪔');
    } else if (month === 10 && day === 4) { // November 4
        //messages.push('Happy Deepavali🪔');
    } else if (month === 11 && day === 25) { // December 25
        messages.push('Wishing you Christmas blessings wrapped in love, tied up with joy!☃️❄️');
    }

    messages.forEach(message => showMessage(message));
}

// 6: Function to show announcements
function showAnnouncement(message) {
    const announcementDiv = document.createElement('div');
    announcementDiv.classList.add('announcement','animated-announcement');
    announcementDiv.innerHTML = `
        <strong>Message:</strong> ${message}
        <span class="close" onclick="this.parentElement.remove()">&times;</span>
    `;
    document.getElementById('announcementsDisplay').appendChild(announcementDiv);

    // Remove animation class after the animation ends
    setTimeout(() => {
        announcementDiv.classList.remove('animated-announcement');
    }, 10000); // Assuming the animation duration is 3 seconds
}

// 7: Handle the login and validate credentials (only allow "admin" and "1234")
async function handleLogin(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === 'admin' && password === '1234') {
        closeModal('loginModal'); // Close login modal after successful login
        openModal('announcementModal'); // Open announcement modal directly after login
    } else {
        alert('Invalid credentials!');
        closeModal('loginModal'); // Close login modal on failed login
        closeModal('menuModal');  // Ensure all modals close
    }
}

// 8: Handle announcement submission 
document.getElementById('enterAnnouncementBtn').addEventListener('click', function () {
    const message = document.getElementById("message").value; // Only message input

    if (message.trim() !== "") {
        alert("Announcement added successfully!");
        announcementModal.style.display = "none"; // Close the announcement modal
        showAnnouncement(message); // Display announcement
    } else {
        alert("Please enter a message!");
    }
});

// 9: Add event listeners for DOM actions (login, announcements, etc.)
document.addEventListener('DOMContentLoaded', () => {
    applySeasonalEffect(); // Apply seasonal effects when page loads
    showSpecialDayMessages(); // Show special day messages

    // Handle login form submission via AJAX
    const loginForm = document.querySelector('#loginModal form');
    loginForm.addEventListener('submit', handleLogin);

    // Navigation button to open login modal
    document.getElementById('staffBtn').addEventListener('click', () => {
        openModal('loginModal');
    });

    // Closing modals
    document.getElementById('closeLogin').addEventListener('click', () => {
        closeModal('loginModal');
    });
    document.getElementById('closeMenu').addEventListener('click', () => {
        closeModal('menuModal');
    });
    document.getElementById('closeAnnouncement').addEventListener('click', () => {
        closeModal('announcementModal');
    });
});
