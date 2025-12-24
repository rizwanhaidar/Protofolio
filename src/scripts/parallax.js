/**
 * Parallax effect for logo scrolling
 * Applies horizontal movement based on scroll position with configurable speed
 */

(function initParallax() {
  'use strict';

  // Configuration
  const CONFIG = {
    defaultSpeed: 0.5,
    throttleDelay: 16, // ~60fps
  };

  let ticking = false;

  /**
   * Apply parallax transformation to logos
   */
  function applyParallaxEffect() {
    const logos = document.querySelectorAll('.logo-item');
    
    if (!logos.length) {
      return;
    }

    const scrollX = window.scrollX || window.pageXOffset;

    logos.forEach(logo => {
      try {
        const speed = parseFloat(logo.dataset.parallaxSpeed) || CONFIG.defaultSpeed;
        const translateX = scrollX * speed;
        
        // Use transform for better performance
        logo.style.transform = `translateX(${translateX}px)`;
      } catch (error) {
        console.error('Error applying parallax effect to logo:', error);
      }
    });

    ticking = false;
  }

  /**
   * Request animation frame with throttling
   */
  function requestParallaxUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(applyParallaxEffect);
      ticking = true;
    }
  }

  /**
   * Initialize parallax listeners
   */
  function initialize() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      console.info('Parallax effect disabled due to reduced motion preference');
      return;
    }

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });

    // Initial application
    applyParallaxEffect();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
