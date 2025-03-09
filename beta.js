// Integrated JavaScript for ElevateX

// DOM Elements
const chatBubble = document.getElementById('chatBubble');
const chatWidget = document.getElementById('chatWidget');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const mentorshipMeet = document.getElementById('mentorshipMeet');
const mentorshipModal = document.getElementById('mentorshipModal');
const closeMentorshipModal = document.getElementById('closeMentorshipModal');
const leaderboardBtn = document.getElementById('leaderboardBtn');
const leaderboardModal = document.getElementById('leaderboardModal');
const closeLeaderboardModal = document.getElementById('closeLeaderboardModal');
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
  if (chatWidget) {
    chatWidget.style.display = (chatWidget.style.display === 'flex') ? 'none' : 'flex';
  }
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
    response = "I can help you optimize your resume! Visit your profile section to upload and analyze your resume.";
  } else if (message.includes('job') || message.includes('work') || message.includes('career')) {
    response = "Looking for job opportunities? Check out our 'Live Job Market' section for real-time job listings that match your skills.";
  } else if (message.includes('course') || message.includes('learn') || message.includes('study')) {
    response = "We have personalized courses based on your skills and career goals. Visit the 'Courses' section to explore them!";
  } else if (message.includes('skill') || message.includes('improve')) {
    response = "Want to improve your skills? Take our skills assessment first, then follow the personalized roadmap we create for you.";
  } else if (message.includes('mentor') || message.includes('guidance')) {
    response = "Our mentorship feature connects you with industry professionals. Use the 'Mentorship Meet' button to schedule a session.";
  } else if (message.includes('leaderboard') || message.includes('ranking') || message.includes('score')) {
    response = "Check out our leaderboard to see how you rank among other users and what skills are trending in the community!";
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
    window.location.href = 'chat_bot.html';
  });
  
  addSafeEventListener(closeMentorshipModal, 'click', function() {
    if (mentorshipModal) {
      mentorshipModal.style.display = 'none';
    }
  });

// Leaderboard modal events
addSafeEventListener(leaderboardBtn, 'click', function() {
  if (leaderboardModal) {
    leaderboardModal.style.display = 'flex';
    // Populate leaderboard data if it's not already populated
    if (!document.querySelector('.leaderboard-row')) {
      generateLeaderboardData();
    }
  } else {
    window.location.href = 'leaderboard.html';
  }
});

addSafeEventListener(closeLeaderboardModal, 'click', function() {
  if (leaderboardModal) {
    leaderboardModal.style.display = 'none';
  }
});

// Function to generate and display leaderboard data
function generateLeaderboardData() {
  if (!leaderboardModal) return;
  
  const leaderboardContent = leaderboardModal.querySelector('.leaderboard-content') || 
                            leaderboardModal.querySelector('.modal-content');
  
  if (!leaderboardContent) return;
  
  // Sample leaderboard data
  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", score: 9850, skills: ["Python", "Data Science", "Machine Learning"] },
    { rank: 2, name: "Maria Garcia", score: 9720, skills: ["JavaScript", "React", "Node.js"] },
    { rank: 3, name: "David Chen", score: 9580, skills: ["UX Design", "Figma", "User Research"] },
    { rank: 4, name: "Priya Patel", score: 9470, skills: ["Project Management", "Agile", "Scrum"] },
    { rank: 5, name: "James Wilson", score: 9350, skills: ["Java", "Spring", "Microservices"] },
    { rank: 6, name: "Sarah Ahmed", score: 9210, skills: ["Digital Marketing", "SEO", "Content Strategy"] },
    { rank: 7, name: "Michael Brown", score: 9140, skills: ["DevOps", "AWS", "Docker"] },
    { rank: 8, name: "Emily Taylor", score: 9050, skills: ["Product Management", "Data Analysis", "A/B Testing"] },
    { rank: 9, name: "Carlos Rodriguez", score: 8970, skills: ["Full Stack", "TypeScript", "MongoDB"] },
    { rank: 10, name: "Lisa Wong", score: 8920, skills: ["Cloud Architecture", "Azure", "Kubernetes"] }
  ];
  
  // Create leaderboard table
  const leaderboardTable = document.createElement('div');
  leaderboardTable.className = 'leaderboard-table';
  
  // Add header
  const leaderboardHeader = document.createElement('div');
  leaderboardHeader.className = 'leaderboard-header';
  leaderboardHeader.innerHTML = `
    <div class="lb-rank">Rank</div>
    <div class="lb-name">Name</div>
    <div class="lb-score">Score</div>
    <div class="lb-skills">Top Skills</div>
  `;
  leaderboardTable.appendChild(leaderboardHeader);
  
  // Add rows
  leaderboardData.forEach(user => {
    const row = document.createElement('div');
    row.className = 'leaderboard-row';
    if (user.rank <= 3) {
      row.classList.add('top-rank');
    }
    
    row.innerHTML = `
      <div class="lb-rank">${user.rank}</div>
      <div class="lb-name">${user.name}</div>
      <div class="lb-score">${user.score}</div>
      <div class="lb-skills">
        ${user.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
      </div>
    `;
    leaderboardTable.appendChild(row);
  });
  
  // Create find-your-rank section
  const findRankSection = document.createElement('div');
  findRankSection.className = 'find-rank-section';
  findRankSection.innerHTML = `
    <div class="your-rank">
      <p>Your current rank: <span class="highlight">24</span></p>
      <p>Your score: <span class="highlight">7865</span></p>
      <p class="rank-msg">You're in the top 15% of users! Complete more courses to improve your ranking.</p>
    </div>
    <div class="trending-skills">
      <h3>Trending Skills</h3>
      <div class="trending-skill-list">
        <span class="trending-skill">AI/Machine Learning</span>
        <span class="trending-skill">Cloud Computing</span>
        <span class="trending-skill">Cybersecurity</span>
        <span class="trending-skill">Data Visualization</span>
        <span class="trending-skill">React</span>
      </div>
    </div>
  `;
  
  // Clear existing content and add new content
  leaderboardContent.innerHTML = '<h2>Skill Leaderboard</h2>';
  leaderboardContent.appendChild(leaderboardTable);
  leaderboardContent.appendChild(findRankSection);
  
  // Add leaderboard styles if not already added
  addLeaderboardStyles();
}

// Add leaderboard styles
function addLeaderboardStyles() {
  if (!document.getElementById('leaderboard-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'leaderboard-styles';
    styleSheet.innerHTML = `
      .leaderboard-table {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      
      .leaderboard-header, .leaderboard-row {
        display: grid;
        grid-template-columns: 0.5fr 2fr 1fr 3fr;
        padding: 12px 15px;
      }
      
      .leaderboard-header {
        background: rgba(69, 243, 255, 0.15);
        font-weight: bold;
        color: var(--primary);
      }
      
      .leaderboard-row {
        border-bottom: 1px solid #3a3a40;
        transition: all 0.2s ease;
      }
      
      .leaderboard-row:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      
      .top-rank {
        background: rgba(69, 243, 255, 0.05);
      }
      
      .top-rank .lb-rank {
        font-weight: bold;
        color: var(--primary);
      }
      
      .skill-badge {
        display: inline-block;
        background: rgba(69, 243, 255, 0.1);
        border: 1px solid rgba(69, 243, 255, 0.3);
        border-radius: 12px;
        padding: 2px 8px;
        margin-right: 5px;
        font-size: 0.8rem;
      }
      
      .find-rank-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #3a3a40;
      }
      
      .your-rank {
        background: rgba(69, 243, 255, 0.05);
        border-radius: 10px;
        padding: 15px;
      }
      
      .highlight {
        color: var(--primary);
        font-weight: bold;
        font-size: 1.2rem;
      }
      
      .rank-msg {
        margin-top: 10px;
        font-style: italic;
      }
      
      .trending-skills {
        background: rgba(69, 243, 255, 0.05);
        border-radius: 10px;
        padding: 15px;
      }
      
      .trending-skills h3 {
        margin-top: 0;
        margin-bottom: 10px;
        color: var(--primary);
      }
      
      .trending-skill-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      
      .trending-skill {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 5px 10px;
        font-size: 0.9rem;
      }
      
      @media (max-width: 768px) {
        .leaderboard-header, .leaderboard-row {
          grid-template-columns: 0.5fr 2fr 1fr;
        }
        
        .lb-skills {
          grid-column: 1 / -1;
          margin-top: 8px;
        }
        
        .find-rank-section {
          grid-template-columns: 1fr;
        }
      }
    `;
    
    document.head.appendChild(styleSheet);
  }
}

// Get Started button - Show profile section
addSafeEventListener(getStartedBtn, 'click', function() {
  if (welcomeSection && profileSection) {
    welcomeSection.classList.add('hidden');
    profileSection.classList.remove('hidden');
  }
});

// Profile navigation - switch to profile section
addSafeEventListener(profileNavItem, 'click', function() {
  if (welcomeSection && profileSection) {
    welcomeSection.classList.add('hidden');
    profileSection.classList.remove('hidden');
  }
});

// Home button functionality
addSafeEventListener(homeButton, 'click', function() {
  if (welcomeSection && profileSection) {
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
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
      tabContent.classList.add('active');
    }
  });
});

// Navigation for different pages
document.addEventListener("DOMContentLoaded", function() {
  // Attach event listeners for the nav buttons
  addSafeEventListener(document.getElementById('courseNav'), 'click', function() {
    window.location.href = 'courses.html';
  });
  
  addSafeEventListener(document.getElementById('simulationNav'), 'click', function() {
    window.location.href = 'roadmaps.html';
  });
  
  addSafeEventListener(document.getElementById('jobMarketNav'), 'click', function() {
    window.location.href = 'news.html';
  });
  
  addSafeEventListener(document.getElementById('upscalingNav'), 'click', function() {
    window.location.href = 'upscaling.html';
  });
  
  addSafeEventListener(document.getElementById('exploreRoadmapBtn'), 'click', function() {
    window.location.href = 'upscaling.html';
  });
  
  // Add classes to style elements on initial load
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate-in');
    }, 100 * index);
  });
  
  // Set first nav item as active by default
  if (navItems.length > 0) {
    navItems[0].classList.add('active');
  }
  
  // Add Botpress webchat scripts properly
  if (!document.querySelector('script[src*="botpress.cloud"]')) {
    const injectScript = document.createElement('script');
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    document.body.appendChild(injectScript);
    
    const botContentScript = document.createElement('script');
    botContentScript.src = "https://files.bpcontent.cloud/2025/03/09/00/20250309001920-K25R7GVN.js";
    document.body.appendChild(botContentScript);
  }
  
  // Create leaderboard modal if it doesn't exist
  if (leaderboardBtn && !leaderboardModal) {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'leaderboardModal';
    modalDiv.className = 'modal';
    
    modalDiv.innerHTML = `
      <div class="modal-content leaderboard-content">
        <h2>Skill Leaderboard</h2>
        <div class="button-group">
          <button id="closeLeaderboardModal" class="close-modal">Close</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modalDiv);
    
    // Add event listener to the new close button
    document.getElementById('closeLeaderboardModal').addEventListener('click', function() {
      modalDiv.style.display = 'none';
    });
  }
});

// Handle window clicks to close modals when clicking outside
window.addEventListener('click', function(e) {
  if (mentorshipModal && e.target === mentorshipModal) {
    mentorshipModal.style.display = 'none';
  }
  if (leaderboardModal && e.target === leaderboardModal) {
    leaderboardModal.style.display = 'none';
  }
});

// Mobile navigation menu toggle
const mobileMenuButton = document.createElement('div');
mobileMenuButton.className = 'mobile-menu-button';
mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
const headerContainer = document.querySelector('.header-container');
if (headerContainer) {
  headerContainer.appendChild(mobileMenuButton);
}

addSafeEventListener(mobileMenuButton, 'click', function() {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.toggle('mobile-visible');
  }
});

// Force reload if page is loaded from bfcache
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    window.location.reload();
  }
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
    
    .leaderboard-content {
      max-width: 800px;
    }
    
    .modal-content h2 {
      margin-bottom: 20px;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
  
  document.head.appendChild(styleSheet);
}

// Initialize page with loading indicator
document.addEventListener('DOMContentLoaded', function() {
  // Add mobile styles
  addMobileStyles();
  
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
});