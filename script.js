/* ─────────────────────────────────────────────────────────
   SAGAR RAMESH DUBILE — PORTFOLIO JAVASCRIPT v2
   Neural canvas · Typewriter · Chart · Sparkline · Interactions
───────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── CURSOR GLOW ── */
  const glow = document.getElementById('cursor-glow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    highlightNav();
  }, { passive: true });

  /* ── MOBILE MENU ── */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

  /* ── NAV ACTIVE ── */
  function highlightNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('[data-nav]');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) current = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }

  /* ── TYPEWRITER ── */
  const phrases = [
    'AI/ML pipelines.',
    'semantic search engines.',
    'smart contracts.',
    'data-driven insights.',
    'neural networks.',
    'Ethereum DApps.',
    'predictive models.',
    'analytics dashboards.',
  ];
  const tw = document.getElementById('typewriter');
  let pi = 0, ci = 0, deleting = false;
  function type() {
    const p = phrases[pi];
    tw.textContent = deleting ? p.slice(0, ci--) : p.slice(0, ci++);
    const speed = deleting ? 42 : ci > p.length ? 2200 : 76;
    if (!deleting && ci > p.length) { deleting = true; setTimeout(type, speed); return; }
    if (deleting && ci < 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 380); return; }
    setTimeout(type, speed);
  }
  type();

  /* ── COUNTER ANIMATION ── */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 55));
    const tmr = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(tmr);
    }, 22);
  }
  setTimeout(() => {
    document.querySelectorAll('.stat-number[data-target]').forEach(animateCounter);
  }, 1300);

  /* ── SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── SKILL BAR ANIMATION ── */
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(b => b.classList.add('animate'));
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  const sg = document.getElementById('skills-grid');
  if (sg) skillObs.observe(sg);

  /* ── SKILL CATEGORY FILTER ── */
  document.querySelectorAll('.skill-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skill-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.skill-card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'flex' : 'none';
      });
    });
  });

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ── CHART BAR ANIMATION ── */
  const chartObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.bar-fill').forEach((bar, i) => {
          setTimeout(() => bar.classList.add('animate'), i * 120);
        });
        drawSparkline();
        chartObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const chartEl = document.querySelector('.data-chart-wrap');
  if (chartEl) chartObs.observe(chartEl);

  /* ── SPARKLINE ── */
  function drawSparkline() {
    const line = document.getElementById('spark-line');
    if (!line) return;
    const pts = [
      [0, 55], [20, 48], [40, 38], [60, 42], [80, 30], [100, 22], [120, 27], [140, 15], [160, 18], [180, 10], [200, 8]
    ];
    line.setAttribute('points', pts.map(p => p.join(',')).join(' '));
    line.style.strokeDasharray = 300;
    line.style.strokeDashoffset = 300;
    line.style.transition = 'stroke-dashoffset 2s ease';
    setTimeout(() => { line.style.strokeDashoffset = 0; }, 100);
  }
  // Also try on load for cases where element is visible above fold
  window.addEventListener('DOMContentLoaded', drawSparkline);

  /* ── NEURAL NETWORK CANVAS ── */
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createNodes() {
    nodes = [];
    const count = Math.floor((W * H) / 14000);
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        r: Math.random() * 1.8 + 0.8,
        op: Math.random() * 0.45 + 0.15,
        hue: Math.random() > 0.5 ? '0,229,255' : '168,85,247',
      });
    }
  }

  function drawCanvas() {
    ctx.clearRect(0, 0, W, H);
    const maxDist = 130;

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < maxDist) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,229,255,${(1 - d / maxDist) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${n.hue},${n.op})`;
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(drawCanvas);
  }

  window.addEventListener('resize', () => { resize(); createNodes(); }, { passive: true });
  resize(); createNodes(); drawCanvas();

  /* ── PROJECT CARD PARALLAX ── */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-6px) rotateY(${cx * 7}deg) rotateX(${-cy * 7}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* ── TERMINAL REVEAL ── */
  const termBody = document.getElementById('terminal-body');
  if (termBody) {
    const lines = termBody.querySelectorAll('.t-line');
    lines.forEach(l => { l.style.opacity = '0'; l.style.transform = 'translateX(-10px)'; l.style.transition = 'opacity .3s ease, transform .3s ease'; });
    const tObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        lines.forEach((l, i) => setTimeout(() => { l.style.opacity = '1'; l.style.transform = 'translateX(0)'; }, i * 110));
        tObs.disconnect();
      }
    }, { threshold: 0.3 });
    tObs.observe(termBody);
  }

  /* ── BLOCKCHAIN BLOCK PULSE SEQUENCE ── */
  const blocks = [document.getElementById('bl1'), document.getElementById('bl2'), document.getElementById('bl3')];
  if (blocks[0]) {
    let active = 2;
    setInterval(() => {
      blocks.forEach(b => { if (b) b.classList.remove('active-block'); });
      active = (active + 1) % 3;
      if (blocks[active]) blocks[active].classList.add('active-block');
    }, 2500);
  }

  /* ── PIPELINE NODE SEQUENTIAL GLOW ── */
  const pnodes = ['pn1', 'pn2', 'pn3', 'pn4'].map(id => document.getElementById(id));
  if (pnodes[0]) {
    let pActive = 0;
    setInterval(() => {
      pnodes.forEach(n => { if (n) n.style.boxShadow = ''; });
      const colors = ['rgba(0,229,255,.4)', 'rgba(249,115,22,.4)', 'rgba(168,85,247,.4)', 'rgba(34,197,94,.4)'];
      if (pnodes[pActive]) pnodes[pActive].style.boxShadow = `0 0 20px ${colors[pActive]}`;
      pActive = (pActive + 1) % 4;
    }, 900);
  }

  /* ── CONTACT FORM (FORMSPREE) ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('form-submit-btn');
      const txtNorm = btn.querySelector('.submit-text');
      const txtLoad = btn.querySelector('.submit-loading');
      const success = document.getElementById('form-success');
      const error = document.getElementById('form-error');

      // Loading state
      btn.disabled = true;
      txtNorm.style.display = 'none';
      txtLoad.style.display = 'inline';
      success.style.display = 'none';
      error.style.display = 'none';

      try {
        const data = new FormData(contactForm);
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          success.style.display = 'block';
          contactForm.reset();
        } else {
          error.style.display = 'block';
        }
      } catch {
        error.style.display = 'block';
      } finally {
        btn.disabled = false;
        txtNorm.style.display = 'inline';
        txtLoad.style.display = 'none';
      }
    });
  }

})();
