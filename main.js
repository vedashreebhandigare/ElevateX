// main.js - Main JavaScript functionality for ElevateX

// DOM Elements
const chatBubble = document.getElementById('chatBubble');
const chatWidget = document.getElementById('chatWidget');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const mentorshipMeet = document.getElementById('mentorshipMeet');
const mentorshipModal = document.getElementById('mentorshipModal');
const closeMentorshipModal = document.getElementById('closeMentorshipModal');
const uploadResume = document.getElementById('uploadResume');
const resumeModal = document.getElementById('resumeModal');
const closeResumeModal = document.getElementById('closeResumeModal');
const uploadArea = document.getElementById('uploadArea');
const resumeFile = document.getElementById('resumeFile');
const uploadSubmit = document.getElementById('uploadSubmit');
const profileNavItem = document.getElementById('profileNavItem');
const getStartedBtn = document.getElementById('getStartedBtn');
const profileSection = document.getElementById('profileSection');
const welcomeSection = document.getElementById('welcomeSection');
const profileTabs = document.querySelectorAll('.profile-tab');
const tabContents = document.querySelectorAll('.tab-content');
const homeButton = document.getElementById('homeButton');
const navItems = document.querySelectorAll('.nav-item');

// Function to safely add event listeners (checks if element exists first)
function addSafeEventListener(element, eventType, callback) {
  if (element) {
    element.addEventListener(eventType, callback);
  }
}

// Navigation items functionality
navItems.forEach(item => {
  addSafeEventListener(item, 'click', function() {
    navItems.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// Chat widget toggle
addSafeEventListener(chatBubble, 'click', function() {
  chatWidget.style.display = chatWidget.style.display === 'flex' ? 'none' : 'flex';
});

// Send message in chat
addSafeEventListener(sendMessage, 'click', function() {
  const message = chatInput.value.trim();
  if (message) {
    sendUserMessage(message);
  }
});

// Send message on Enter key
addSafeEventListener(chatInput, 'keypress', function(e) {
  if (e.key === 'Enter') {
    const message = chatInput.value.trim();
    if (message) {
      sendUserMessage(message);
    }
  }
});

// Function to send user message and get AI response
function sendUserMessage(message) {
  // Add user message to chat
  const userMessageEl = document.createElement('p');
  userMessageEl.className = 'user-message';
  userMessageEl.textContent = message;
  chatBody.appendChild(userMessageEl);
  
  // Clear input
  chatInput.value = '';
  
  // Scroll to bottom
  chatBody.scrollTop = chatBody.scrollHeight;
  
  // Simulate AI thinking with dots
  const thinkingEl = document.createElement('p');
  thinkingEl.className = 'bot-message';
  thinkingEl.textContent = 'Thinking...';
  chatBody.appendChild(thinkingEl);
  
  // Simulate AI response after delay
  setTimeout(() => {
    chatBody.removeChild(thinkingEl);
    getBotResponse(message);
  }, 1000);
}

// Get AI response based on user message
function getBotResponse(message) {
  let response = '';
  
  // Simple response logic based on keywords
  message = message.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    response = "Hello! How can I help with your career journey today?";
  } else if (message.includes('resume') || message.includes('cv')) {
    response = "I can help you optimize your resume! Upload it using the 'Upload Resume' button, and I'll analyze it for you.";
  } else if (message.includes('job') || message.includes('work') || message.includes('career')) {
    response = "Looking for job opportunities? Check out our 'Live Job Market' section for real-time job listings that match your skills.";
  } else if (message.includes('course') || message.includes('learn') || message.includes('study')) {
    response = "We have personalized courses based on your skills and career goals. Visit the 'Courses' section to explore them!";
  } else if (message.includes('skill') || message.includes('improve')) {
    response = "Want to improve your skills? Take our skills assessment first, then follow the personalized roadmap we create for you.";
  } else if (message.includes('mentor') || message.includes('guidance')) {
    response = "Our mentorship feature connects you with industry professionals. Use the 'Mentorship Meet' button to schedule a session.";
  } else if (message.includes('thank')) {
    response = "You're welcome! I'm here to help you succeed in your career journey.";
  } else {
    response = "I'm here to help with your career development. You can ask me about resume optimization, job opportunities, skill development, or mentorship!";
  }
  
  // Add bot response to chat
  const botMessageEl = document.createElement('p');
  botMessageEl.className = 'bot-message';
  botMessageEl.textContent = response;
  chatBody.appendChild(botMessageEl);
  
  // Scroll to bottom
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Mentorship modal events
addSafeEventListener(mentorshipMeet, 'click', function() {
  mentorshipModal.style.display = 'flex';
});

addSafeEventListener(closeMentorshipModal, 'click', function() {
  mentorshipModal.style.display = 'none';
});

// Resume upload modal events
addSafeEventListener(uploadResume, 'click', function() {
  resumeModal.style.display = 'flex';
});

addSafeEventListener(closeResumeModal, 'click', function() {
  resumeModal.style.display = 'none';
});

// Upload area click to trigger file input
addSafeEventListener(uploadArea, 'click', function() {
  resumeFile.click();
});

// File input change event
addSafeEventListener(resumeFile, 'change', function() {
  if (this.files && this.files[0]) {
    const fileName = this.files[0].name;
    uploadArea.innerHTML = `
      <i class="fas fa-file-alt"></i>
      <p>${fileName}</p>
    `;
  }
});

// Drag and drop functionality for resume upload
addSafeEventListener(uploadArea, 'dragover', function(e) {
  e.preventDefault();
  this.classList.add('dragover');
});

addSafeEventListener(uploadArea, 'dragleave', function() {
  this.classList.remove('dragover');
});

addSafeEventListener(uploadArea, 'drop', function(e) {
  e.preventDefault();
  this.classList.remove('dragover');
  
  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    resumeFile.files = e.dataTransfer.files;
    const fileName = e.dataTransfer.files[0].name;
    uploadArea.innerHTML = `
      <i class="fas fa-file-alt"></i>
      <p>${fileName}</p>
    `;
  }
});

// Resume upload submit button
addSafeEventListener(uploadSubmit, 'click', function() {
  if (resumeFile.files && resumeFile.files[0]) {
    // Simulate upload process
    uploadArea.innerHTML = `
      <div class="spinner"></div>
      <p>Uploading and analyzing...</p>
    `;
    
    // Simulate completion after delay
    setTimeout(() => {
      uploadArea.innerHTML = `
        <i class="fas fa-check-circle" style="color: #32D74B; font-size: 3rem;"></i>
        <p>Upload successful! Analysis complete.</p>
      `;
      
      // Close modal after another delay
      setTimeout(() => {
        resumeModal.style.display = 'none';
        // Reset upload area for next time
        uploadArea.innerHTML = `
          <i class="fas fa-cloud-upload-alt"></i>
          <p>Drag and drop your resume file here<br>or click to browse</p>
        `;
        
        // Show chat widget with analysis message
        chatWidget.style.display = 'flex';
        const botMessageEl = document.createElement('p');
        botMessageEl.className = 'bot-message';
        botMessageEl.textContent = "I've analyzed your resume! Your skills align well with Data Science positions. Consider strengthening your SQL and visualization skills to improve your profile. Would you like personalized course recommendations?";
        chatBody.appendChild(botMessageEl);
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1500);
    }, 2500);
  } else {
    alert('Please select a file to upload');
  }
});

//course button
// Force reload if page is loaded from bfcache
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    window.location.reload();
  }
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Attach event listener for the "Course" nav button
  const courseNav = document.getElementById('courseNav');
  if (courseNav) {
    courseNav.addEventListener('click', function() {
      window.location.href = 'courses.html';
    });
  }
});

document.getElementById('exploreRoadmapBtn').addEventListener('click', function() {
  window.location.href = 'upscaling.html';
});

// Get Started button - Show profile section
addSafeEventListener(getStartedBtn, 'click', function() {
  welcomeSection.classList.add('hidden');
  profileSection.classList.remove('hidden');
});

// Profile navigation - switch to profile section
addSafeEventListener(profileNavItem, 'click', function() {
  welcomeSection.classList.add('hidden');
  profileSection.classList.remove('hidden');
});

// Home button functionality
addSafeEventListener(homeButton, 'click', function() {
  welcomeSection.classList.remove('hidden');
  profileSection.classList.add('hidden');
  // Reset active tabs
  profileTabs.forEach(t => t.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));
  if (profileTabs.length > 0) {
    profileTabs[0].classList.add('active');
  }
  if (tabContents.length > 0) {
    tabContents[0].classList.add('active');
  }
});

// Tab navigation
profileTabs.forEach((tab) => {
  addSafeEventListener(tab, 'click', function() {
    // Remove active class from all tabs
    profileTabs.forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    this.classList.add('active');
    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));
    // Show the corresponding tab content
    const tabId = this.getAttribute('data-tab') + 'Tab';
    document.getElementById(tabId).classList.add('active');
  });
});

// Handle window clicks to close modals when clicking outside
window.addEventListener('click', function(e) {
  if (e.target === mentorshipModal) {
    mentorshipModal.style.display = 'none';
  }
  if (e.target === resumeModal) {
    resumeModal.style.display = 'none';
  }
});

// Mobile navigation menu toggle
const mobileMenuButton = document.createElement('div');
mobileMenuButton.className = 'mobile-menu-button';
mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.header-container').appendChild(mobileMenuButton);

addSafeEventListener(mobileMenuButton, 'click', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('mobile-visible');
});

// Add mobile styles
function addMobileStyles() {
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
    @media (max-width: 768px) {
      .header-container {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .action-buttons {
        margin-top: 15px;
        width: 100%;
        justify-content: space-between;
      }
      
      nav {
        flex-direction: column;
        display: none;
      }
      
      nav.mobile-visible {
        display: flex;
      }
      
      .nav-item {
        width: 100%;
        text-align: left;
        border-bottom: 1px solid #3a3a40;
      }
      
      .mobile-menu-button {
        position: absolute;
        top: 25px;
        right: 20px;
        font-size: 24px;
        cursor: pointer;
        display: block;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
      
      .content-wrapper {
        padding: 20px;
      }
      
      .elevate-x {
        font-size: 3rem;
      }
    }
    
    @media (min-width: 769px) {
      .mobile-menu-button {
        display: none;
      }
      
      nav {
        display: flex !important;
        flex-direction: row;
      }
    }
    
    .hidden {
      display: none;
    }
    
    /* Spinner animation for loading states */
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(69, 243, 255, 0.3);
      border-radius: 50%;
      border-top-color: var(--primary);
      animation: spin 1s linear infinite;
      margin: 10px auto;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* Modal styles */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 200;
      justify-content: center;
      align-items: center;
    }
    
    .modal-content {
      background-color: var(--card-bg);
      padding: 30px;
      border-radius: 15px;
      max-width: 500px;
      width: 90%;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(69, 243, 255, 0.1);
    }
    
    .modal-content h2 {
      margin-bottom: 20px;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .upload-area {
      border: 2px dashed #3a3a40;
      border-radius: 10px;
      padding: 30px;
      margin: 20px 0;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .upload-area:hover, .upload-area.dragover {
      border-color: var(--primary);
      background-color: rgba(69, 243, 255, 0.05);
    }
    
    .upload-area i {
      font-size: 3rem;
      color: #3a3a40;
      margin-bottom: 15px;
    }
    
    .button-group {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 20px;
    }
    
    .close-modal {
      padding: 12px 25px;
      background-color: transparent;
      border: 1px solid #3a3a40;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .close-modal:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `;
  
  document.head.appendChild(styleSheet);
}

// Call the function to add mobile styles
addMobileStyles();

// Force reload if page is loaded from bfcache
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    window.location.reload();
  }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Add classes to style elements on initial load
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate-in');
    }, 100 * index);
  });
  
  // Simulate page load progress indicator
  const progressElement = document.createElement('div');
  progressElement.className = 'page-load-progress';
  document.body.appendChild(progressElement);
  
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 5;
    progressElement.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(progressInterval);
      setTimeout(() => {
        progressElement.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(progressElement);
        }, 300);
      }, 500);
    }
  }, 50);
  
  // Set first nav item as active by default
  if (navItems.length > 0) {
    navItems[0].classList.add('active');
  }
});

// Add page load progress bar style
const progressStyle = document.createElement('style');
progressStyle.innerHTML = `
  .page-load-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 0;
    background: var(--gradient);
    z-index: 1000;
    transition: width 0.3s ease, opacity 0.3s ease;
  }
  
  .animate-in {
    animation: fadeInUp 0.5s forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(progressStyle);