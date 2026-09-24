document.addEventListener('DOMContentLoaded', () => {
  // 1. Clock functionality
  const clockEl = document.getElementById('ist-clock');
  function updateClock() {
    const now = new Date();
    // Format to IST
    const timeString = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    if (clockEl) {
      clockEl.textContent = `IST: ${timeString}`;
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 2. Uptime Counter (Since a plausible start date, e.g., Jan 1, 2022)
  const uptimeEl = document.getElementById('uptime-counter');
  const startDate = new Date('2022-01-01T00:00:00Z');
  function updateUptime() {
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (uptimeEl) {
      uptimeEl.textContent = `UPTIME: ${diffDays} DAYS`;
    }
  }
  updateUptime();

  // 3. Number Counter Animation on scroll
  const metrics = document.querySelectorAll('.metric');
  
  const countUp = (el) => {
    const target = parseFloat(el.getAttribute('data-value'));
    if (isNaN(target)) return;
    
    let current = 0;
    const duration = 1500; // ms
    const increment = target / (duration / 16); // 60fps
    
    const isFloat = target % 1 !== 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        el.textContent = isFloat ? target.toFixed(1) : target;
      } else {
        el.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
      }
    }, 16);
  };

  const observerOptions = {
    threshold: 0.2
  };

  const metricsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const els = entry.target.querySelectorAll('.metric');
        els.forEach(el => {
          if (!el.classList.contains('counted') && el.hasAttribute('data-value')) {
            countUp(el);
            el.classList.add('counted');
          }
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card').forEach(card => {
    metricsObserver.observe(card);
  });

  // 4. Nav Rail Highlight on Scroll
  const sections = document.querySelectorAll('.observer-target');
  const navItems = document.querySelectorAll('.nav-item');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('data-target') === id) {
            item.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => {
    navObserver.observe(section);
  });
});
