// roadmap.js - Handles the career roadmap visualization

// Sample data for the career roadmap
const careerSteps = [
  {
    id: 1,
    title: "Skill Assessment",
    description: "Evaluate your current technical and soft skills",
    color: "var(--step1-color)",
    icon: "fa-magnifying-glass-chart",
    complete: true
  },
  {
    id: 2,
    title: "Learning Path",
    description: "Curated courses based on your career goals",
    color: "var(--step2-color)",
    icon: "fa-graduation-cap",
    complete: true
  },
  {
    id: 3,
    title: "Practical Projects",
    description: "Apply your skills with real-world projects",
    color: "var(--step3-color)",
    icon: "fa-diagram-project",
    complete: false
  },
  {
    id: 4,
    title: "Mentorship",
    description: "Connect with industry professionals",
    color: "var(--step4-color)",
    icon: "fa-comments",
    complete: false
  },
  {
    id: 5,
    title: "Job Readiness",
    description: "Prepare for interviews and applications",
    color: "var(--step5-color)",
    icon: "fa-briefcase",
    complete: false
  }
];

// Initialize the roadmap visualization
function initRoadmap() {
  const roadmapContainer = document.getElementById('roadmapContainer');
  
  if (!roadmapContainer) return;
  
  // Clear existing content
  roadmapContainer.innerHTML = '';
  
  // Create roadmap timeline
  const roadmapElement = document.createElement('div');
  roadmapElement.className = 'roadmap-timeline';
  
  // Create roadmap line
  const roadmapLine = document.createElement('div');
  roadmapLine.className = 'roadmap-line';
  roadmapElement.appendChild(roadmapLine);
  
  // Add each step to the roadmap
  careerSteps.forEach((step, index) => {
    // Create step element
    const stepElement = document.createElement('div');
    stepElement.className = 'roadmap-step';
    stepElement.setAttribute('data-step', step.id);
    
    // Create step bullet
    const stepBullet = document.createElement('div');
    stepBullet.className = 'step-bullet';
    stepBullet.style.backgroundColor = step.color;
    if (step.complete) {
      stepBullet.classList.add('complete');
      stepBullet.innerHTML = '<i class="fas fa-check"></i>';
    } else {
      stepBullet.innerHTML = `<span>${step.id}</span>`;
    }
    
    // Create step content
    const stepContent = document.createElement('div');
    stepContent.className = 'step-content';
    
    // Apply alternating layout for even/odd items
    if (index % 2 === 0) {
      stepContent.classList.add('right');
    } else {
      stepContent.classList.add('left');
    }
    
    // Step header with icon
    const stepHeader = document.createElement('div');
    stepHeader.className = 'step-header';
    stepHeader.innerHTML = `
      <div class="step-icon" style="background: ${step.color}">
        <i class="fas ${step.icon}"></i>
      </div>
      <h3>${step.title}</h3>
    `;
    
    // Step description
    const stepDesc = document.createElement('div');
    stepDesc.className = 'step-description';
    stepDesc.textContent = step.description;
    
    // Assemble step content
    stepContent.appendChild(stepHeader);
    stepContent.appendChild(stepDesc);
    
    // Add button for incomplete steps
    if (!step.complete) {
      const stepButton = document.createElement('button');
      stepButton.className = 'step-button';
      stepButton.textContent = 'Start';
      stepButton.style.background = step.color;
      stepButton.addEventListener('click', () => startStep(step.id));
      stepContent.appendChild(stepButton);
    } else if (step.id < careerSteps.length) {
      // Add "continue" button for completed steps (except the last one)
      const continueButton = document.createElement('button');
      continueButton.className = 'step-button';
      continueButton.textContent = 'Continue';
      continueButton.style.background = step.color;
      continueButton.addEventListener('click', () => startStep(step.id + 1));
      stepContent.appendChild(continueButton);
    }
    
    // Assemble step element
    stepElement.appendChild(stepBullet);
    stepElement.appendChild(stepContent);
    
    // Add to roadmap
    roadmapElement.appendChild(stepElement);
  });
  
  // Add roadmap to container
  roadmapContainer.appendChild(roadmapElement);
  
  // Add CSS for the roadmap
  addRoadmapStyles();
}

// Function to handle starting a roadmap step
function startStep(stepId) {
  console.log(`Starting step ${stepId}`);
  
  // Handle different steps
  switch(stepId) {
    case 1:
      window.location.href = 'assessment.html';
      break;
    case 2:
      window.location.href = 'course.html';
      break;
    case 3:
      window.location.href = 'projects.html';
      break;
    case 4:
      window.location.href = 'mentorship.html';
      break;
    case 5:
      window.location.href = 'job-prep.html';
      break;
    default:
      console.log('Invalid step ID');
  }
}

// Add the roadmap-specific styles
function addRoadmapStyles() {
  // Check if styles already exist
  if (document.getElementById('roadmap-styles')) return;
  
  const styleSheet = document.createElement('style');
  styleSheet.id = 'roadmap-styles';
  styleSheet.innerHTML = `
    .roadmap-timeline {
      position: relative;
      padding: 20px 0;
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
    }
    
    .roadmap-line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 4px;
      background: linear-gradient(to bottom, 
        rgba(69, 243, 255, 0.8),
        rgba(255, 39, 112, 0.8));
      transform: translateX(-50%);
    }
    
    .roadmap-step {
      position: relative;
      margin: 60px 0;
      display: flex;
      align-items: center;
    }
    
    .step-bullet {
      position: absolute;
      left: 50%;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      z-index: 2;
      transform: translateX(-50%);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }
    
    .step-bullet.complete {
      background-color: #32D74B !important;
    }
    
    .step-bullet span {
      color: var(--dark);
    }
    
    .step-bullet i {
      color: var(--dark);
    }
    
    .step-content {
      width: 45%;
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
      border: 1px solid rgba(69, 243, 255, 0.1);
    }
    
    .step-content:hover {
      transform: translateY(-5px);
    }
    
    .step-content.right {
      margin-left: auto;
    }
    
    .step-header {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    
    .step-icon {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
    }
    
    .step-icon i {
      color: var(--dark);
      font-size: 0.9rem;
    }
    
    .step-description {
      color: #b0b0b0;
      margin-bottom: 20px;
    }
    
    .step-button {
      padding: 8px 20px;
      border: none;
      border-radius: 20px;
      color: var(--dark);
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .step-button:hover {
      opacity: 0.9;
      transform: translateY(-2px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      .roadmap-line {
        left: 30px;
      }
      
      .step-bullet {
        left: 30px;
      }
      
      .step-content {
        width: 75%;
        margin-left: 50px !important;
      }
    }
  `;
  
  document.head.appendChild(styleSheet);
}

// Initialize the roadmap when the DOM is loaded
document.addEventListener('DOMContentLoaded', initRoadmap);