/* ============================================
   DR S C SANTRA CLINIC — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Hamburger Menu ----
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Sticky Header Scroll Effect ----
  const header = document.getElementById('header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ---- Highlight Today in Timings Table ----
  const timingsTable = document.getElementById('timingsTable');
  if (timingsTable) {
    const today = new Date().getDay(); // 0=Sun, 1=Mon, ...
    const rows = timingsTable.querySelectorAll('tbody tr[data-day]');
    rows.forEach(row => {
      if (parseInt(row.dataset.day) === today) {
        row.classList.add('today');
        // Add "Today" indicator
        const firstCell = row.querySelector('td:first-child');
        if (firstCell) {
          firstCell.innerHTML += ' <span class="today-indicator">📍 Today</span>';
        }
      }
    });
  }

  // ---- Appointment Form → WhatsApp Redirect ----
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    // Set minimum date to today
    const dateInput = document.getElementById('preferredDate');
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm   = String(today.getMonth() + 1).padStart(2, '0');
      const dd   = String(today.getDate()).padStart(2, '0');
      dateInput.setAttribute('min', `${yyyy}-${mm}-${dd}`);
    }

    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = document.getElementById('patientName').value.trim();
      const phone   = document.getElementById('patientPhone').value.trim();
      const date    = document.getElementById('preferredDate').value;
      const time    = document.getElementById('preferredTime').value;
      const message = document.getElementById('patientMessage').value.trim();

      // Validate
      if (!name || !phone || !date || !time) {
        showFormError('Please fill in all required fields.');
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        showFormError('Please enter a valid 10-digit phone number.');
        return;
      }

      // Format date
      const formattedDate = new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Build WhatsApp message
      let waMessage = `Hello Doctor, I would like to book an appointment.%0A%0A`;
      waMessage += `*Name:* ${name}%0A`;
      waMessage += `*Phone:* ${phone}%0A`;
      waMessage += `*Preferred Date:* ${formattedDate}%0A`;
      waMessage += `*Preferred Time:* ${time}%0A`;
      if (message) {
        waMessage += `*Message:* ${message}%0A`;
      }
      waMessage += `%0AThank you!`;

      // Redirect to WhatsApp
      const whatsappURL = `https://wa.me/917001999079?text=${waMessage}`;
      window.open(whatsappURL, '_blank');
    });
  }

  function showFormError(msg) {
    // Remove existing error
    const existing = document.querySelector('.form-error');
    if (existing) existing.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
      background: #FEE2E2;
      color: #DC2626;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      border: 1px solid #FECACA;
      animation: fadeIn 0.3s ease;
    `;
    errorDiv.textContent = '⚠️ ' + msg;

    const form = document.getElementById('appointmentForm');
    form.insertBefore(errorDiv, form.firstChild);

    setTimeout(() => {
      errorDiv.style.opacity = '0';
      errorDiv.style.transition = 'opacity 0.3s ease';
      setTimeout(() => errorDiv.remove(), 300);
    }, 4000);
  }

  // ---- Testimonial Slider ----
  const track     = document.getElementById('testimonialTrack');
  const prevBtn   = document.getElementById('sliderPrev');
  const nextBtn   = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');

  if (track && prevBtn && nextBtn && dotsContainer) {
    let currentSlide = 0;
    const slides = track.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    const dots = dotsContainer.querySelectorAll('.slider-dot');

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentSlide = index;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.index));
      });
    });

    // Auto-slide every 5 seconds
    let autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);

    // Pause on hover
    track.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.parentElement.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
    });

    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
      }
    }, { passive: true });
  }

  // ---- FAQ Accordion ----
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(other => other.classList.remove('active'));

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ---- Fade-in Animation on Scroll ----
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
