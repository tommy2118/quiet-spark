document.addEventListener('DOMContentLoaded', () => {
  // Navigation functionality
  const chapters = document.querySelectorAll('.chapter');
  const chapterLinks = document.querySelectorAll('.chapter-link');
  const tocButton = document.getElementById('toc-button');
  const tableOfContents = document.getElementById('table-of-contents');
  
  // Smooth Scrolling for All Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Smooth scroll with enhanced easing
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page jump
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Parallax Effects for Images
  const parallaxElements = document.querySelectorAll('.eden-tree-img, .stone-marker-img');
  
  function handleParallax() {
    parallaxElements.forEach(img => {
      const scrollPosition = window.pageYOffset;
      const imgPosition = img.getBoundingClientRect().top + scrollPosition;
      const offset = scrollPosition - imgPosition;
      
      // Only apply effect when the image is in view
      if (img.getBoundingClientRect().top < window.innerHeight && 
          img.getBoundingClientRect().bottom > 0) {
        // Subtle parallax effect
        const parallaxOffset = offset * 0.05;
        img.style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
  }
  
  // Initialize parallax and set up event listener
  window.addEventListener('scroll', handleParallax);
  handleParallax(); // Initial call
  
  // Add Classes to Special Images
  document.querySelectorAll('img[src*="eden-tree"]').forEach(img => {
    img.classList.add('eden-tree-img', 'transition-transform', 'duration-1000');
  });
  
  document.querySelectorAll('img[src*="stone-marker"]').forEach(img => {
    img.classList.add('stone-marker-img', 'transition-transform', 'duration-1000');
  });
  
  // Section Transition Effects for Dividers
  const dividers = document.querySelectorAll('.divider');
  
  function handleDividerEffects() {
    dividers.forEach(divider => {
      const dividerPosition = divider.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (dividerPosition < windowHeight - 100) {
        divider.classList.add('opacity-100');
        divider.classList.remove('opacity-0');
      }
    });
  }
  
  // Add initial opacity class
  dividers.forEach(divider => {
    divider.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
  });
  
  // Monitor scrolling for effects
  window.addEventListener('scroll', handleDividerEffects);
  handleDividerEffects(); // Initial call
  
  // Table of contents functionality
  if (tocButton && tableOfContents) {
    // Toggle table of contents
    tocButton.addEventListener('click', () => {
      tableOfContents.classList.toggle('hidden');
      
      // Fade in effect when showing
      if (!tableOfContents.classList.contains('hidden')) {
        tableOfContents.style.opacity = '0';
        setTimeout(() => {
          tableOfContents.style.opacity = '1';
        }, 10);
      }
    });
    
    // Close when clicking the close button
    const closeButton = document.getElementById('close-toc');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        tableOfContents.style.opacity = '0';
        setTimeout(() => {
          tableOfContents.classList.add('hidden');
        }, 300);
      });
    }
    
    // Close when clicking the backdrop
    const tocBackdrop = document.getElementById('toc-backdrop');
    if (tocBackdrop) {
      tocBackdrop.addEventListener('click', () => {
        tableOfContents.style.opacity = '0';
        setTimeout(() => {
          tableOfContents.classList.add('hidden');
        }, 300);
      });
    }
    
    // Close when clicking on a link in the TOC
    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(link => {
      link.addEventListener('click', () => {
        tableOfContents.style.opacity = '0';
        setTimeout(() => {
          tableOfContents.classList.add('hidden');
        }, 300);
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