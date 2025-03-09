// Node data extracted from your PDF (simplified example)
const nodeData = {
    internet: {
      title: "Internet",
      text: `How does the internet work? 
  HTTP, Domain Name, Hosting & DNS, Browsers & how they work, etc.`
    },
    html: {
      title: "HTML",
      text: `Learn the basics: 
  Semantic HTML, Forms & Validations, Accessibility, SEO Basics...`
    },
    css: {
      title: "CSS",
      text: `Making layouts, Responsive design, 
  Preprocessors (Sass, PostCSS), and more...`
    },
    js: {
      title: "JavaScript",
      text: `Fetch API / Ajax (XHR), DOM manipulation, 
  JS fundamentals, modern ES features...`
    },
    vcs: {
      title: "Version Control",
      text: `Git, GitHub, GitLab, Bitbucket, branching strategies, 
  commit best practices, etc.`
    },
    frameworks: {
      title: "Frameworks",
      text: `React, Vue, Angular, Svelte, SolidJS, Qwik, 
  and other modern libraries.`
    },
    testing: {
      title: "Testing",
      text: `Unit testing, Integration testing, 
  Tools like Jest, Cypress, Playwright, etc.`
    }
  };
  
  function openModal(nodeKey) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
  
    const data = nodeData[nodeKey];
    modalTitle.innerText = data.title;
    modalText.innerText = data.text;
  
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Close modal when clicking outside content
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  };
  