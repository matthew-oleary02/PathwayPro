// Function to handle tab selection
function selectTab(tabName) {
    // Hide all tab contents
    var tabContents = document.querySelectorAll('[id$="Content"]');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Deactivate all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Activate the selected tab
    var selectedTab = document.querySelector('.tab[data-tab="' + tabName + '"]');
    selectedTab.classList.add('active');

    // Show the corresponding tab content
    var selectedContent = document.getElementById(tabName + 'Content');
    selectedContent.style.display = 'block';
}

// Function to handle search button click
function searchStudents() {
    // Redirect to the advisor_studentlist route
    window.location.href = '/advisor_studentlist';
}

// Function to display mock chat
function displayMockChat() {
    var chatContainer = document.getElementById('chatContainer');
    var messages = [
        "Hi Professor Anderson, this is Jane Margolis. I hope you're doing well. I wanted to reach out to discuss my plan for the upcoming semester.",
        "Hello Jane! I'm glad you reached out. I was actually just thinking about your schedule. What's on your mind?",
        "I'm glad to hear that! Well, I've been considering my options and I've chosen most of my courses, but I'm still uncertain about one of them.",
        "I see. Which course are you unsure about?",
        "It's the English Composition course. I chose it because it fulfills a lot of my Magis Core requirements, but I'm not entirely sure if it aligns with my interests or academic goals.",
        "That's understandable. Have you looked into any alternative courses that might align better with your interests and goals?"
    ];

    messages.forEach(function(message, index) {
        var messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.classList.add(index % 2 === 0 ? 'other' : 'me');
        messageDiv.textContent = message;
        chatContainer.appendChild(messageDiv);
    });
}

// Function to send message
function sendMessage() {
    var messageInput = document.getElementById('messageInput').value;
    var chatContainer = document.getElementById('chatContainer');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.classList.add('me');
    messageDiv.textContent = messageInput;
    chatContainer.appendChild(messageDiv);
    // Display mock chat after sending message
    displayMockChat();
    // Clear input after sending message
    document.getElementById('messageInput').value = '';
}

// Function to show all appointments
function showAllAppointments() {
    // Logic to show all upcoming appointments
    window.location.href = '/advisor_apptlist';
}