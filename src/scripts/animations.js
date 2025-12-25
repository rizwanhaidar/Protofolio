// Scroll-triggered fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('section, .card, article');
  elements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// Counter animation for metrics
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (element.dataset.suffix || '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + (element.dataset.suffix || '');
    }
  }, 16);
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target, 1500);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
  });
});

// Toast notification system
function showToast(message, type = 'success') {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        ${type === 'success' 
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>'
          : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'}
      </svg>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('toast-show'), 10);
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Enhanced email copy functionality
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.contact-copy').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.getAttribute('data-copy-text');
      if (text) {
        try {
          await navigator.clipboard.writeText(text);
          showToast('Email copied to clipboard!');
          button.classList.add('copied');
          setTimeout(() => button.classList.remove('copied'), 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
          showToast('Failed to copy email', 'error');
        }
      }
    });
  });
});

// Smooth parallax effect for hero background
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('header');
  if (!hero) return;
  
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach(el => {
          el.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
});
