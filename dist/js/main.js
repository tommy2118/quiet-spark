document.addEventListener('DOMContentLoaded', () => {
  // Navigation functionality
  const chapters = document.querySelectorAll('.chapter');
  const chapterLinks = document.querySelectorAll('.chapter-link');
  const tocButton = document.getElementById('toc-button');
  const tableOfContents = document.getElementById('table-of-contents');
  
  // Table of contents functionality
  if (tocButton && tableOfContents) {
    // Toggle table of contents
    tocButton.addEventListener('click', () => {
      tableOfContents.classList.toggle('hidden');
    });
    
    // Close when clicking the close button
    const closeButton = document.getElementById('close-toc');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        tableOfContents.classList.add('hidden');
      });
    }
    
    // Close when clicking the backdrop
    const tocBackdrop = document.getElementById('toc-backdrop');
    if (tocBackdrop) {
      tocBackdrop.addEventListener('click', () => {
        tableOfContents.classList.add('hidden');
      });
    }
    
    // Close when clicking on a link in the TOC
    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(link => {
      link.addEventListener('click', () => {
        tableOfContents.classList.add('hidden');
      });
    });
  }

  // Reading progress indicator
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      progressBar.style.width = scrollPercentage + '%';
    });
  }
  
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  if (themeToggle) {
    // Check for saved theme preference or use preferred color scheme
    const currentTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the current theme
    if (currentTheme === 'dark') {
      htmlElement.classList.add('dark');
      themeToggle.textContent = '☀️'; // sun emoji for switching to light
    } else {
      themeToggle.textContent = '🌙'; // moon emoji for switching to dark
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
      htmlElement.classList.toggle('dark');
      
      // Update local storage
      if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
      } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
      }
    });
  }
  
  // Font size controls
  const increaseFontBtn = document.getElementById('increase-font');
  const decreaseFontBtn = document.getElementById('decrease-font');
  const contentArea = document.getElementById('content-area');
  
  if (increaseFontBtn && decreaseFontBtn && contentArea) {
    // Load saved font size
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      contentArea.style.fontSize = savedFontSize;
    }
    
    increaseFontBtn.addEventListener('click', () => {
      const currentSize = window.getComputedStyle(contentArea).fontSize;
      const newSize = (parseFloat(currentSize) * 1.1) + 'px';
      contentArea.style.fontSize = newSize;
      localStorage.setItem('fontSize', newSize);
    });
    
    decreaseFontBtn.addEventListener('click', () => {
      const currentSize = window.getComputedStyle(contentArea).fontSize;
      const newSize = (parseFloat(currentSize) / 1.1) + 'px';
      contentArea.style.fontSize = newSize;
      localStorage.setItem('fontSize', newSize);
    });
  }
});