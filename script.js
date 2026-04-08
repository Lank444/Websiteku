// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ─── SCROLL ANIMATIONS (IntersectionObserver) ───
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bars inside the observed element
            entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));

// ─── ACTIVE NAV HIGHLIGHT ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + current
            ? 'var(--accent)'
            : '';
    });
});

// ─── CONTACT FORM FEEDBACK ───
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
    btn.style.background = '#4a9e6e';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.disabled = false;
        this.reset();
    }, 2500);
});
