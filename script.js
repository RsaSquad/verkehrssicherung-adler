/* ═══════════════════════════════════════
   Verkehrssicherung – Interaktivität
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // ─── Sticky Header ───
    const header = document.getElementById('header');
    const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ─── Mobile Hamburger Menu ───
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    // Close nav on link click
    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ─── Scroll Reveal (IntersectionObserver) ───
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ─── Animated Counter ───
    const counters = document.querySelectorAll('.stat-card__number[data-count]');
    let countersAnimated = false;

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const tick = () => {
            current += step;
            if (current >= target) {
                el.textContent = target;
                return;
            }
            el.textContent = Math.floor(current);
            requestAnimationFrame(tick);
        };
        tick();
    };

    const statsSection = document.querySelector('.about__stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    counters.forEach(c => animateCounter(c));
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        statsObserver.observe(statsSection);
    }

    // ─── Back to Top Button ───
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ─── Contact Form Validation ───
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Reset errors
            form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

            // Validate required fields
            const requiredFields = [
                { id: 'ansprechpartner', type: 'text' },
                { id: 'firma', type: 'text' },
                { id: 'telefon', type: 'text' },
                { id: 'email', type: 'email' }
            ];

            requiredFields.forEach(field => {
                const input = document.getElementById(field.id);
                const group = input.closest('.form-group');
                let fieldInvalid = false;

                if (field.type === 'select') {
                    if (!input.value) fieldInvalid = true;
                } else if (field.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!input.value.trim() || !emailRegex.test(input.value.trim())) fieldInvalid = true;
                } else {
                    if (!input.value.trim()) fieldInvalid = true;
                }

                if (fieldInvalid) {
                    group.classList.add('error');
                    isValid = false;
                }
            });

            // Validate checkbox
            const datenschutz = document.getElementById('datenschutz');
            if (!datenschutz.checked) {
                datenschutz.closest('.form-group').classList.add('error');
                isValid = false;
            }

            if (isValid) {
                // Hide form fields, show success
                const formElements = form.querySelectorAll('.form-row, .form-group, .contact-form__title, .btn--full');
                formElements.forEach(el => el.style.display = 'none');
                formSuccess.classList.add('show');
            } else {
                // Scroll to first error
                const firstError = form.querySelector('.form-group.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });

        // Live clear error on input
        form.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', () => {
                input.closest('.form-group')?.classList.remove('error');
            });
            input.addEventListener('change', () => {
                input.closest('.form-group')?.classList.remove('error');
            });
        });
    }

    // ─── Smooth scroll for all anchor links ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
