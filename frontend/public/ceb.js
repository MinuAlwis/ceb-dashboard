// function openNewWindow(url) {
//     window.open(url, '_blank');
// }
// // Function to create falling emoji elements
// function createFallingEmojis(emoji, count = 100) {
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
//         emojiElement.style.animationDuration = (Math.random() * 3 + 3) + 's';
//     }
// }

// // Function to determine the current month and apply the appropriate effect
// function applySeasonalEffect() {
//     const now = new Date();
//     const month = now.getMonth(); // January is 0, December is 11

//     switch (month) {
//         case 0: // January - Thai Pongal
//             createFallingEmojis('🌾');
//             break;
//         case 1: // February - Sri Lankan Independence
//             createFallingEmojis('🇱🇰');
//             break;
//         case 2: // March - Maha Shivaratri
//             createFallingEmojis('✨');
//             break;
//         case 3: // April - New Year
//             createFallingEmojis('🎇');
//             break;
//         case 4: // May - Vesak
//             createFallingEmojis('🌼');
//             break;
//         case 5: // June - Poson
//             createFallingEmojis('🌻');
//             break;
//         case 6: // July 
//             createFallingEmojis('');
//             break;
//         case 7: // August - Kandy Esala Perahera
//             createFallingEmojis('🌼');
//             break;
//         case 8: // September
//             break;
//         case 9: // October - Children's and Elders' Day
//             createFallingEmojis('👨‍👩‍👧‍👦');
//             break;
//         case 10: // November - Deepavali
//             createFallingEmojis('🪔');
//             break;
//         case 11: // December - Christmas
//             createFallingEmojis('❄️ 🌲');
//             break;
//         default:
//             break;
//     }
// }

// // Function to show the message box
// function showMessage(message) {
//     const messageBox = document.createElement('div');
//     messageBox.classList.add('message-box');

//     const closeButton = document.createElement('span');
//     closeButton.classList.add('message-box-close');
//     closeButton.innerHTML = '&times;';
//     closeButton.onclick = () => messageBox.style.display = 'none';

//     const messageContent = document.createElement('p');
//     messageContent.textContent = message;

//     messageBox.appendChild(closeButton);
//     messageBox.appendChild(messageContent);
//     document.body.appendChild(messageBox);

//     messageBox.style.display = 'block';
// }

// // Function to determine special days and show messages
// function showSpecialDayMessages() {
//     const now = new Date();
//     const day = now.getDate();
//     const month = now.getMonth();

//     const messages = [];

//     if (month === 0) { // January
//         if (day === 1) messages.push('Wish you good luck✨');
//         if (day === 14) messages.push('Happy Thai Pongal!');
//     } else if (month === 1) { // February
//         if (day === 4) messages.push('Happy Independence Day!');
//         if (day === 14) messages.push('Happy Valentine\'s Day💞');
//     } else if (month === 2 && day === 11) { // March 11
//         messages.push('Happy Maha Shivarathri!');
//     } else if (month === 3 && day === 14) { // April 14
//         messages.push('Happy New Year🎇🙏🏻');
//     } else if (month === 4) { // May
//         if (day === 6) messages.push('Happy Vesak!');
//         if (day === 12) messages.push('Happy Mother\'s Day👩‍👧‍👦🩷');
//     } else if (month === 5) { // June
//         if (day === 5) messages.push('Happy Poson!');
//         if (now.getDay() === 0 && day > 14 && day < 22) messages.push('Happy Father\'s Day👨‍👧‍👦🩷');
//     } else if (month === 6) { // July
//         if (day === 7) messages.push('Happy Friendship Day🍻');
//         if (day === 1) messages.push('Happy Kataragama!');
//     } else if (month === 7 && day === 9) { // August 1
//         //messages.push('Happy Kandy Esala Perahera!');
//         messages.push('Stay happy as allways🥰😄👻');
//     } else if (month === 8) { // October
//         if (day === 7) messages.push('Happy Children Day🥳 & Happy Elders Day🎉👨‍👩‍👧‍👦');
//         if (day === 6) messages.push('Happy Teachers Day👩🏻‍🏫👨🏻‍🏫');
//     } else if (month === 10 && day === 4) { // November 4
//         messages.push('Happy Deepavali🪔');
//     } else if (month === 11 && day === 25) { // December 25
//         messages.push('Merry Christmas☃️❄️');
//     }

//     messages.forEach(message => showMessage(message));
// }

// // Function to handle opening and closing modals
// function openModal(modalId) {
//     document.getElementById(modalId).style.display = 'block';
// }

// function closeModal(modalId) {
//     document.getElementById(modalId).style.display = 'none';
// }

// // Function to fetch notifications for a user
// async function fetchNotifications(toUser) {
//     try {
//         const response = await fetch(`/notifications/${toUser}`);
//         const data = await response.json();

//         if (data.success) {
//             // Loop through each notification and display it
//             data.notifications.forEach(notification => {
//                 showAnnouncement(notification.from_user, notification.to_user, notification.message);
//             });
//         } else {
//             alert('Failed to fetch notifications');
//         }
//     } catch (error) {
//         console.error('Error fetching notifications:', error);
//     }
// }

// // Function to display announcement
// function showAnnouncement(from, to, message) {
//     const announcementDiv = document.createElement('div');
//     announcementDiv.classList.add('announcement');
//     announcementDiv.innerHTML = `
//         <strong>From:</strong> ${from}<br>
//         <strong>To:</strong> ${to}<br>
//         <strong>Message:</strong> ${message}
//         <span class="close" onclick="this.parentElement.remove()">&times;</span>
//     `;
//     document.getElementById('announcementsDisplay').appendChild(announcementDiv);
// }

// // Function to schedule and display announcements
// function scheduleAnnouncement(from, to, message, displayUntil) {
//     const now = new Date();
//     const displayUntilDate = new Date(displayUntil);

//     if (now <= displayUntilDate) {
//         // Initial display
//         showAnnouncement(from, to, message);

//         // Display every 15 minutes
//         const interval = setInterval(() => {
//             const currentTime = new Date();
//             if (currentTime <= displayUntilDate) {
//                 showAnnouncement(from, to, message);
//             } else {
//                 clearInterval(interval); // Stop scheduling once the displayUntil date has passed
//             }
//         }, 15 * 60 * 1000);
//           //15 * 60 * 1000); // 15 minutes interval
//     }
// }


// // Navigation bar and modal functionality
// document.addEventListener('DOMContentLoaded', () => {
//     applySeasonalEffect();
//     showSpecialDayMessages();



//     // Handle login form submission via AJAX
//     const loginForm = document.querySelector('#loginModal form');
//     loginForm.addEventListener('submit', async (event) => {
//         event.preventDefault(); // Prevent form from submitting normally

//         // Get username and password input values
//         const username = document.querySelector('#username').value;
//         const password = document.querySelector('#password').value;

//         // Send login request via Fetch API
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         const data = await response.json();

//         if (data.success) {
//             // Close login modal and open the menu modal if login is successful
//             closeModal('loginModal');
//             openModal('menuModal');
//         } else {
//             alert('Login failed: Invalid credentials');
//         }
//     });

//     // Navigation button
//     document.getElementById('staffBtn').addEventListener('click', () => {
//         openModal('loginModal');
//     });

//     // Login modal buttons
//     document.getElementById('closeLogin').addEventListener('click', () => {
//         closeModal('loginModal');
//     });

//     document.getElementById('loginBtn').addEventListener('click', () => {
//         closeModal('loginModal');
//         openModal('menuModal');
//     });

//     // Menu modal buttons
//     document.getElementById('closeMenu').addEventListener('click', () => {
//         closeModal('menuModal');
//     });

//     document.getElementById('sendMessageBtn').addEventListener('click', () => {
//         closeModal('menuModal');
//         openModal('announcementModal');
//     });

//     // Announcement modal buttons
//     document.getElementById('closeAnnouncement').addEventListener('click', () => {
//         closeModal('announcementModal');
//     });

//     document.getElementById('enterAnnouncementBtn').addEventListener('click', () => {
//         const from = document.getElementById('from').value;
//         const to = document.getElementById('to').value;
//         const message = document.getElementById('message').value;
//         const displayUntil = document.getElementById('displayUntil').value; // Date input field in your modal
        
//         if (from && to && message && displayUntil) {
//             // Schedule the announcement to display every 15 minutes until the specified date
//             scheduleAnnouncement(from, to, message, displayUntil);
//         } else {
//             // Show the announcement immediately if no displayUntil date is provided
//             showAnnouncement(from, to, message);
//         }

//         closeModal('announcementModal');
//         /*// Schedule the announcement to display every 15 minutes until the specified date
//         showAnnouncement(from, to, message, displayUntil);
//         closeModal('announcementModal');*/
//     });


// });

function openNewWindow(url) {
    window.open(url, '_blank');
}

// Function to create falling emoji elements
function createFallingEmojis(emoji, count = 50) {
    const body = document.body;
    const emojiContainer = document.createElement('div');
    emojiContainer.classList.add('falling-container');
    body.appendChild(emojiContainer);

    for (let i = 0; i < count; i++) {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('falling-emoji');
        emojiElement.textContent = emoji;
        emojiContainer.appendChild(emojiElement);
        emojiElement.style.left = Math.random() * 100 + 'vw';
        emojiElement.style.animationDuration = (Math.random() * 5 + 5) + 's';
    }
}

// Function to determine the current month and apply the appropriate effect
function applySeasonalEffect() {
    const now = new Date();
    const month = now.getMonth(); // January is 0, December is 11
    const day = now.getDate();    // Day of the month

    switch (`${month}-${day}`) {
        case '0-14': // January 14 - Thai Pongal
            createFallingEmojis('🌾');
            break;
        case '1-4': // February 4 - Sri Lankan Independence Day
            createFallingEmojis('🇱🇰');
            break;
        case '2-11': // March 11 - Maha Shivaratri
            createFallingEmojis('✨');
            break;
        case '3-14': // April 14 - New Year
            createFallingEmojis('🎇');
            break;
        case '4-5': // May 5 - Vesak
            createFallingEmojis('🌼');
            break;
        case '5-24': // June 24 - Poson
            createFallingEmojis('🌻');
            break;
        case '7-25': // August 25 - Kandy Esala Perahera
            createFallingEmojis('🌼');
            break;
        case '9-1': // October 1 - Children's and Elders' Day
            createFallingEmojis('👨‍👩‍👧‍👦');
            break;
        case '10-12': // November 12 - Deepavali
            createFallingEmojis('🪔');
            break;
        case '11-25': // December 25 - Christmas
            createFallingEmojis('❄️ 🌲');
            break;
        default:
            break;
    }
}




// Function to show the message box
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

// Function to determine special days and show messages
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
        messages.push('Happy Maha Shivarathri!');
    } else if (month === 3 && day === 14) { // April 14
        messages.push('Happy New Year🎇🙏🏻');
    } else if (month === 4) { // May
        if (day === 6) messages.push('Happy Vesak!');
        if (day === 12) messages.push('Happy Mother\'s Day👩‍👧‍👦🩷');
    } else if (month === 5) { // June
        if (day === 5) messages.push('Happy Poson!');
        if (now.getDay() === 0 && day > 14 && day < 22) messages.push('Happy Father\'s Day👨‍👧‍👦🩷');
    } else if (month === 6) { // July
        if (day === 7) messages.push('Happy Friendship Day🍻');
        if (day === 1) messages.push('Happy Kataragama!');
    } else if (month === 7 && day === 9) { // August 1
        messages.push('Stay happy as always🥰😄👻');
    } else if (month === 8) { // October
        if (day === 1) messages.push('Happy Children Day🥳 & Happy Elders Day🎉👨‍👩‍👧‍👦');
        if (day === 6) messages.push('Happy Teachers Day👩🏻‍🏫👨🏻‍🏫');
    } else if (month === 10 && day === 4) { // November 4
        messages.push('Happy Deepavali🪔');
    } else if (month === 11 && day === 25) { // December 25
        messages.push('Merry Christmas☃️❄️');
    }

    messages.forEach(message => showMessage(message));
}

// Function to handle opening and closing modals
function openModal(loginModal) {
    document.getElementById(loginModal).style.display = 'block';
}

function closeModal(menuModal) {
    document.getElementById(menuModal).style.display = 'none';
}

// Handle announcement submission
const enterAnnouncementBtn = document.getElementById("enterAnnouncementBtn");
enterAnnouncementBtn.addEventListener("click", function () {
    const message = document.getElementById("message").value;  // Only message
    const displayUntil = document.getElementById("displayUntil").value;

    if (message.trim() !== "" && displayUntil) {
        // Store the announcement in the database (API call can be made here)

        // Show the announcement directly without "from" or "to"
        alert("Announcement added successfully!");

        // Close the announcement modal
        announcementModal.style.display = "none";

        // Optionally display the announcement in the message box
        showAnnouncement(message);  // Use message only
    } else {
        alert("Please enter a message and a valid display until date!");
    }
});


// Function to fetch notifications for a user
async function fetchNotifications(toUser) {
    try {
        const response = await fetch(`/notifications/${toUser}`);
        const data = await response.json();

        if (data.success) {
            // Loop through each notification and display it
            data.notifications.forEach(notification => {
                showAnnouncement(notification.from_user, notification.to_user, notification.message);
            });
        } else {
            alert('Failed to fetch notifications');
        }
    } catch (error) {
        console.error('Error fetching notifications:', error);
    }
}

// Function to display an announcement
function showAnnouncement(message) {
    const announcementDiv = document.createElement('div');
    announcementDiv.classList.add('announcement');
    announcementDiv.innerHTML = `
        <strong>Message:</strong> ${message}
        <span class="close" onclick="this.parentElement.remove()">&times;</span>
    `;
    document.getElementById('announcementsDisplay').appendChild(announcementDiv);
}

// After successful login, display the message box directly
function handleLogin() {
    loginModal.style.display = "none"; // Close login modal after successful login
    announcementModal.style.display = "block"; // Show the announcement modal

    // Trigger announcement input after login (with message only)
    const message = document.getElementById("message").value; // Only get message input
    if (message) {
        showAnnouncement(message);  // Display announcement for the logged-in user
    }
}


// Function to schedule and display announcements
function scheduleAnnouncement(from, to, message, displayUntil) {
    const now = new Date();
    const displayUntilDate = new Date(displayUntil);

    if (now <= displayUntilDate) {
        // Initial display
        showAnnouncement(from, to, message);

        // Display every 15 minutes
        const interval = setInterval(() => {
            const currentTime = new Date();
            if (currentTime <= displayUntilDate) {
                showAnnouncement(from, to, message);
            } else {
                clearInterval(interval); // Stop scheduling once the displayUntil date has passed
            }
        }, 15 * 60 * 1000); // 15 minutes interval
    }
}

// Navigation bar and modal functionality
document.addEventListener('DOMContentLoaded', () => {
    applySeasonalEffect();
    showSpecialDayMessages();

    // Handle login form submission via AJAX
    const loginForm = document.querySelector('#loginModal form');
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Get username and password input values
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        // Send login request via Fetch API
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Close login modal and open the menu modal if login is successful
            closeModal('loginModal');
            openModal('menuModal');

            // Fetch notifications for the logged-in user
            fetchNotifications(username);
        } else {
            alert('Login failed: Invalid credentials!');
        }
    });

    // Navigation button
    document.getElementById('staffBtn').addEventListener('click', () => {
        openModal('loginModal');
    });

    // Login modal buttons
    document.getElementById('closeLogin').addEventListener('click', () => {
        closeModal('loginModal');
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        closeModal('loginModal');
        openModal('menuModal');
    });

    // Menu modal buttons
    document.getElementById('closeMenu').addEventListener('click', () => {
        closeModal('menuModal');
    });

    document.getElementById('sendMessageBtn').addEventListener('click', () => {
        closeModal('menuModal');
        openModal('announcementModal');
    });
    

    // Announcement modal buttons
    document.getElementById('closeAnnouncement').addEventListener('click', () => {
        closeModal('announcementModal');
    });

    document.getElementById('enterAnnouncementBtn').addEventListener('click', () => {
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const message = document.getElementById('message').value;
        const displayUntil = document.getElementById('displayUntil').value; // Date input field in your modal

        if (from && to && message && displayUntil) {
            // Schedule the announcement to display every 15 minutes until the specified date
            scheduleAnnouncement(from, to, message, displayUntil);
        } else {
            // Show the announcement immediately if no displayUntil date is provided
            showAnnouncement(from, to, message);
        }

        closeModal('announcementModal');
    });
});
