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
    // Redirect to the employer_studentlist route
    window.location.href = '/employer_studentlist';
}

// Function to display mock chat
function displayMockChat() {
    var chatContainer = document.getElementById('chatContainer');
    var messages = [
        "Hello Mr. Hamlin, this is Jane Margolis from Fairfield University. I was hoping to talk to you about a possible job opportunity.",
        "Hello Jane, I'm happy to hear that you are interested in this potential opportunity.",
        "If possible, I would like to set up a Zoom meeting with you to discuss this opportunity further.",
        "A Zoom meeting works for me, my email is alexhamlin@bigjobmarketingfirm.com. I look forward to hearing from you."
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

// Function to navigate to employer_recstu.html
function viewRecruitedStudents() {
    window.location.href = '/employer_recstu';
}
