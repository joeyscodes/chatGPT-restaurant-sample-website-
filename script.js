/*=============================================
   OSTERIA N.3 – PREMIUM RESTAURANT WEBSITE
   SCRIPT.JS – All interactions, no scroll listeners
===============================================*/

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOADER (only index.html) ---------- */
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 600);
    });
    document.body.style.overflow = 'hidden';
  }

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navbar.classList.remove('scrolled');
        } else {
          navbar.classList.add('scrolled');
        }
      });
    }, { threshold: 0 });
    
    const hero = document.querySelector('.hero');
    if (hero) {
      observer.observe(hero);
    } else {
      navbar.classList.add('scrolled');
    }
  }

  /* ---------- MOBILE HAMBURGER MENU ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ---------- SCROLL REVEAL ANIMATION (IntersectionObserver) ---------- */
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ---------- RESERVATION FORM WITH CONFIRMATION ---------- */
  const reservationForm = document.getElementById('reservationForm');
  const confirmationMsg = document.getElementById('confirmationMsg');
  
  if (reservationForm && confirmationMsg) {
    reservationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      reservationForm.style.display = 'none';
      confirmationMsg.style.display = 'block';
      
      confirmationMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // The form will still submit to Formspree in production
      // For demo: show confirmation, then optionally submit
      reservationForm.submit();
    });
  }

});
