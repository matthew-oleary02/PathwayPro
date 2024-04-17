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

// Function to display mock chat
function displayMockChat() {
    var chatContainer = document.getElementById('chatContainer');
    var messages = [
        "Hello, this is your advisor, Jane Smith. I was hoping to talk to you about your plan for the upcoming semester.",
        "Hello Jane, I'm happy to talk to you about my plan. Is there anything specific that you had questions about?",
        "Yes, I was wondering why you chose that religion course in particular. Other than that, the rest of the schedule looks good.",
        "I mostly chose that religion course due to it fulfilling a lot of my Magis Core requirements, in addition to the topic seeming interesting to me."
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
