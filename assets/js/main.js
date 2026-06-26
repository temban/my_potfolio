document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', setActiveLink);

    const projectsData = {
        'study-ai': {
            title: 'Study AI',
            description: 'An AI-powered learning platform built with FastAPI and PostgreSQL. It features APIs for processing PDFs, images, and videos (OCR, FFmpeg), AI for summaries and quizzes, and a RAG-based chatbot for document understanding.',
            tags: ['Python', 'FastAPI', 'PostgreSQL', 'AI/RAG', 'OCR'],
            images: [
                'assets/images/study-ai/iPhone 16 - 24.png',
                'assets/images/study-ai/iPhone 16 - 55.png',
                'assets/images/study-ai/iPhone 16 - 28.png',
                'assets/images/study-ai/iPhone 16 - 41.png',
                'assets/images/study-ai/iPhone 16 - 90.png'
            ]
        },
        'nationwork': {
            title: 'NationWork',
            description: 'A platform connecting freelancers and clients. Developed robust backend architecture to handle user authentication, job postings, and secure communication channels.',
            tags: ['Backend', 'API Design', 'Architecture'],
            images: [
                'assets/images/nationwork/Web Site Page Comp.png',
                'assets/images/nationwork/Slide Comp.png',
                'assets/images/nationwork/Auth Creation Compte Client - Freelancer.png',
                'assets/images/nationwork/31.png'
            ]
        },
        'tameri': {
            title: 'Tameri Network',
            description: 'A comprehensive mobile and web application system featuring splash screens, secure login/OTP verification, user onboarding, and notification systems.',
            tags: ['Microservices', 'UI/UX Backend', 'Security'],
            images: [
                'assets/images/tameri-network/home.png',
                'assets/images/tameri-network/Login.png',
                'assets/images/tameri-network/Splash screen.png',
                'assets/images/tameri-network/OTP code.png'
            ]
        },
        'willonhair': {
            title: 'WillOnHair',
            description: 'A comprehensive Salon ERP built for a client in Belgium using Odoo. It includes custom POS modules, API integrations with Flutter frontend, and a QR-based loyalty tracking system.',
            tags: ['Odoo', 'ERP', 'Python', 'POS', 'API'],
            images: [
                'assets/images/willonhair/01- POS coiffeur - Commande à etat NOUVEAU.jpg',
                'assets/images/willonhair/02- POS coiffeur - Commande à etat EN COURS.jpg',
                'assets/images/willonhair/1.jpg',
                'assets/images/willonhair/07- Sélection du client.jpg'
            ]
        },
        'hubkilo': {
            title: 'HubKilo',
            description: 'Logistics and parcel delivery management system. Developed automated actions, route tracking, and comprehensive reporting modules.',
            tags: ['Logistics', 'Odoo', 'Automation'],
            images: [
                'assets/images/hubkilo/1.jpg',
                'assets/images/hubkilo/1b.jpg'
            ]
        },
        'dga': {
            title: 'DGA Express',
            description: 'Travel and package management portal. Integrated booking systems, marketplace, and customer communication tools.',
            tags: ['Booking System', 'Marketplace', 'Web App'],
            images: [
                'assets/images/dga/1.png',
                'assets/images/dga/2.png',
                'assets/images/dga/10.png'
            ]
        }
    };

    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTags = document.getElementById('modal-tags');
    const modalGallery = document.getElementById('modal-gallery');

    document.querySelectorAll('.portfolio-image img').forEach(img => {
        img.addEventListener('error', function () {
            this.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><rect fill="' + (document.documentElement.getAttribute('data-theme') === 'dark' ? '#1c1c24' : '#d1d5db') + '" width="400" height="240"/><text fill="' + (document.documentElement.getAttribute('data-theme') === 'dark' ? '#8a8a95' : '#6b7280') + '" font-family="Outfit,sans-serif" font-size="16" text-anchor="middle" x="200" y="120">Image not available</text></svg>');
        });
    });

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];
            if (project) {
                modalTitle.textContent = project.title;
                modalDesc.textContent = project.description;
                modalTags.innerHTML = '';
                project.tags.forEach(tag => {
                    const tagEl = document.createElement('span');
                    tagEl.textContent = tag;
                    modalTags.appendChild(tagEl);
                });
                modalGallery.innerHTML = '';
                project.images.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = project.title;
                    img.loading = 'lazy';
                    img.addEventListener('error', function () {
                        this.style.display = 'none';
                    });
                    modalGallery.appendChild(img);
                });
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('.submit-btn');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            setTimeout(() => {
                btn.innerHTML = original;
                btn.disabled = false;
            }, 2000);
        }, 1500);
        this.reset();
    });

    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    function closeNav() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
    }
    function openNav() {
        hamburger.classList.add('active');
        mobileNav.classList.add('active');
        navOverlay.classList.add('active');
    }
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function () {
            const isOpen = mobileNav.classList.contains('active');
            isOpen ? closeNav() : openNav();
        });
        mobileNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeNav);
        });
        navOverlay.addEventListener('click', closeNav);
    }

    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger').forEach(el => {
        revealObserver.observe(el);
    });

    function animateCounter(el) {
        const text = el.textContent;
        const num = parseInt(text);
        if (isNaN(num)) return;
        const suffix = text.replace(/[\d]/g, '');
        let current = 0;
        const step = Math.ceil(num / 40);
        const timer = setInterval(() => {
            current += step;
            if (current >= num) {
                current = num;
                clearInterval(timer);
            }
            el.textContent = current + suffix;
        }, 30);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if (el.dataset.counted) return;
                el.dataset.counted = 'true';
                animateCounter(el);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.card-title').forEach(el => {
        counterObserver.observe(el);
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    const skillBarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                fill.style.width = fill.style.width || '0%';
                fill.classList.add('animated');
                skillBarObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-bar-fill').forEach(el => {
        skillBarObserver.observe(el);
    });

    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.querySelector('.hero-bg').after(canvas);
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animId;

        function resizeCanvas() {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                ctx.fillStyle = isDark ? `rgba(251, 191, 36, ${this.opacity})` : `rgba(59, 130, 246, ${this.opacity})`;
                ctx.fill();
            }
        }

        const particleCount = Math.min(60, Math.floor(canvas.width / 15));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                        ctx.strokeStyle = isDark
                            ? `rgba(251, 191, 36, ${0.08 * (1 - dist / 150)})`
                            : `rgba(59, 130, 246, ${0.08 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            animId = requestAnimationFrame(animateParticles);
        }
        animateParticles();

        const themeObserver = new MutationObserver(() => {
            particles.forEach(p => p.reset());
        });
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && window.innerWidth > 768) {
        const originalHTML = heroTitle.innerHTML;
        const brIndex = originalHTML.indexOf('<br>');
        if (brIndex !== -1) {
            heroTitle.innerHTML = '';
            const line1 = document.createElement('span');
            line1.className = 'typing-line';
            line1.innerHTML = originalHTML.substring(0, brIndex).trim();
            heroTitle.appendChild(line1);
            heroTitle.appendChild(document.createElement('br'));
            const line2 = document.createElement('span');
            line2.className = 'typing-line gradient-text typing-text';
            heroTitle.appendChild(line2);

            const words = ['Software Engineer', 'Full-Stack Developer', 'Backend Developer', 'Problem Solver'];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function typeEffect() {
                const current = words[wordIndex];
                if (!isDeleting) {
                    line2.textContent = current.substring(0, charIndex + 1);
                    charIndex++;
                    if (charIndex === current.length) {
                        isDeleting = true;
                        setTimeout(typeEffect, 2000);
                        return;
                    }
                    setTimeout(typeEffect, 80);
                } else {
                    line2.textContent = current.substring(0, charIndex - 1);
                    charIndex--;
                    if (charIndex === 0) {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                        setTimeout(typeEffect, 400);
                        return;
                    }
                    setTimeout(typeEffect, 40);
                }
            }
            setTimeout(typeEffect, 1000);
        }
    }
});
