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
        'tameri': {
            title: 'Tameri Network',
            description: '<p>A comprehensive, full-stack social platform built to seamlessly connect donors and visitors with orphanages.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Social & Community:</strong> Full-featured feed with posts, comments, likes, and multimedia.</li><li><strong>Real-Time Messaging:</strong> Instant peer-to-peer chat with typing indicators and persistence.</li><li><strong>Donation & Wallet System:</strong> Integrated digital wallet for purchasing "Stars" and sending physical gifts, powered by Stripe and Orange Money.</li><li><strong>Geolocation & Search:</strong> Map-based search for discovering nearby orphanages based on published needs.</li></ul><p><strong>Architecture:</strong> A highly decoupled, event-driven microservices ecosystem using Docker. Features a Clean Architecture on the Flutter frontend, with FastAPI, Spring Boot (Eureka), Kafka, and PostgreSQL powering the backend.</p>',
            tags: ['Flutter', 'FastAPI', 'Java (Eureka)', 'PostgreSQL', 'Kafka', 'WebSockets', 'MinIO'],
            media: [
                'assets/images/tameri-network/1.jpg',
                'assets/images/tameri-network/1b.jpg',
                'assets/images/tameri-network/1c.jpg',
                'assets/images/tameri-network/2.jpg',
                'assets/images/tameri-network/2a.jpg',
                'assets/images/tameri-network/2b.jpg',
                'assets/images/tameri-network/2c.jpg',
                'assets/images/tameri-network/3.jpg',
                'assets/images/tameri-network/3a.jpg',
                'assets/images/tameri-network/3b.jpg',
                'assets/images/tameri-network/3c.jpg',
                'assets/images/tameri-network/4.jpg',
                'assets/images/tameri-network/5.jpg',
                'assets/images/tameri-network/5a.jpg',
                'assets/images/tameri-network/7.jpg',
                'assets/images/tameri-network/7a.jpg',
                'assets/images/tameri-network/8.jpg',
                'assets/images/tameri-network/9.jpg',
                'assets/images/tameri-network/9a.jpg',
                'assets/images/tameri-network/9b.jpg',
                'assets/images/tameri-network/10.jpg'
            ]
        },
        'nationwork': {
            title: 'Nation Work',
            description: '<p>A full-stack freelance and gig marketplace platform designed to seamlessly connect clients with skilled service providers.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Job Posting & Bidding:</strong> Clients post requests while freelancers submit tailored proposals and cover letters.</li><li><strong>Real-Time Chat & Scheduling:</strong> Instant negotiations via WebSockets and built-in calendar milestones.</li><li><strong>KYC & Trust System:</strong> Robust identity verification for a trusted marketplace environment.</li><li><strong>Dashboard & Analytics:</strong> Comprehensive overviews for active jobs, earnings, and ratings.</li></ul><p><strong>Architecture:</strong> Built for extreme concurrency and speed using React.js on the frontend and FastAPI on an ASGI server. Powered by PostgreSQL, Alembic, JWT auth, and MinIO for S3-compatible secure file storage.</p>',
            tags: ['React.js', 'FastAPI', 'PostgreSQL', 'WebSockets', 'MinIO', 'JWT'],
            media: [
                'assets/images/nationwork/1.png',
                'assets/images/nationwork/2.png',
                'assets/images/nationwork/3.png',
                'assets/images/nationwork/4.png',
                'assets/images/nationwork/5.png',
                'assets/images/nationwork/6.png',
                'assets/images/nationwork/7.png',
                'assets/images/nationwork/8.png',
                'assets/images/nationwork/9.png',
                'assets/images/nationwork/10.png',
                'assets/images/nationwork/11.png',
                'assets/images/nationwork/12.png',
                'assets/images/nationwork/13.png',
                'assets/images/nationwork/14.png',
                'assets/images/nationwork/15.png',
                'assets/images/nationwork/16.png'
            ]
        },
        'ivissas': {
            title: 'Ivisas Affaires',
            description: '<p>A streamlined, responsive web application designed to simplify and digitize the visa application process.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Digital Visa Applications:</strong> Users can intuitively apply for business and travel visas directly through the platform.</li><li><strong>Form Validation:</strong> Integrated real-time client-side validation to ensure accurate data submission before processing.</li><li><strong>Responsive UI:</strong> A clean, modern interface styled for seamless usability across all devices.</li></ul><p><strong>Architecture:</strong> A robust Single Page Application (SPA) built entirely on the Vue.js ecosystem.</p><br><a href="https://github.com/temban/Ivisas" target="_blank" style="color: var(--text-secondary); text-decoration: none; font-weight: bold;"><i class="fab fa-github"></i> View Project on GitHub</a>',
            tags: ['Vue.js', 'JavaScript', 'BootstrapVue', 'Sass'],
            media: [
                'assets/images/ivissas/1.jpg',
                'assets/images/ivissas/2.jpg',
                'assets/images/ivissas/3.jpg',
                'assets/images/ivissas/4.jpg',
                'assets/images/ivissas/5.jpg',
                'assets/images/ivissas/6.jpg',
                'assets/images/ivissas/7.jpg',
                'assets/images/ivissas/8.jpg',
                'assets/images/ivissas/9.jpg'
            ]
        },
        'godlove': {
            title: 'Godlove Enterprise',
            description: '<p>A dynamic, full-stack business application tailored for enterprise resource and customer management.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Centralized Dashboard:</strong> Provides comprehensive overviews of business operations, sales, and client interactions.</li><li><strong>Client Management:</strong> Advanced CRM capabilities allowing for streamlined tracking and engagement.</li><li><strong>Responsive Interface:</strong> A smooth and modern user interface that adapts perfectly across all devices.</li></ul><p><strong>Architecture:</strong> Engineered with a modern React.js frontend ensuring rapid, component-based UI rendering, backed by a robust and scalable database architecture.</p>',
            tags: ['React.js', 'Node.js', 'PostgreSQL', 'Full-Stack'],
            media: [
                'assets/images/godlove/landing page.png',
                'assets/images/godlove/Screen Recording 2026-05-06 150841.mp4'
            ]
        },
        'willonhair': {
            title: 'WillOnHair POS',
            description: '<p>An integrated Point of Sale (POS) and business management system specifically designed for modern hair salons and beauty professionals.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Advanced POS Interface:</strong> Custom Point of Sale system streamlining orders, payments, discounts, and tips.</li><li><strong>Client & Appointment Management:</strong> Comprehensive client profiles (KYC) paired with robust scheduling tools.</li><li><strong>Omnichannel Access:</strong> Seamless integration between the in-store web system and the mobile client application.</li></ul><p><strong>Architecture:</strong> The backend operations and web portal are heavily driven by Odoo ERP and Odoo Website builder, completely integrated with a dedicated Flutter mobile application for cross-platform accessibility.</p>',
            tags: ['Odoo', 'Odoo Website', 'Flutter', 'ERP', 'POS'],
            media: [
                'assets/images/willonhair/1.jpg',
                'assets/images/willonhair/2.jpg',
                'assets/images/willonhair/3.jpg',
                'assets/images/willonhair/4.jpg',
                'assets/images/willonhair/5.jpg',
                'assets/images/willonhair/6.jpg',
                'assets/images/willonhair/7.jpg',
                'assets/images/willonhair/8.jpg',
                'assets/images/willonhair/9.jpg',
                'assets/images/willonhair/10.jpg',
                'assets/images/willonhair/11.jpg',
                'assets/images/willonhair/12.jpg',
                'assets/images/willonhair/13.jpg',
                'assets/images/willonhair/13a.jpg',
                'assets/images/willonhair/14.jpg',
                'assets/images/willonhair/15.jpg',
                'assets/images/willonhair/16.jpg',
                'assets/images/willonhair/17.jpg',
                'assets/images/willonhair/18.jpg'
            ]
        },
        'study-ai': {
            title: 'Study AI',
            description: '<p>An intelligent, full-stack learning platform designed to transform how students and educators interact with pedagogical content using AI.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Multi-Format Document Processing:</strong> Advanced pipeline for importing and extracting text from PDFs, images, and lecture videos.</li><li><strong>AI-Powered Course Generation:</strong> Automatically processes text using LLMs to organize raw content into structured courses and summaries.</li><li><strong>Vector-Based Semantic Search:</strong> Retrieves context-aware answers directly sourced from your uploaded documents using RAG.</li><li><strong>Interactive Revision Quizzes:</strong> Generates tailored multiple-choice and open questions across customizable difficulty levels.</li><li><strong>Real-Time Collaborative Chat:</strong> WebSocket-powered group study rooms and peer-to-peer messaging.</li></ul><p><strong>Architecture:</strong> A Flutter mobile application powered by a high-performance FastAPI backend. Leverages PostgreSQL, SQLAlchemy, OpenAI Whisper, Gemini LLMs, and Sentence-Transformers for AI embeddings.</p>',
            tags: ['Flutter', 'FastAPI', 'PostgreSQL', 'AI/LLMs', 'WebSockets', 'Python'],
            media: [
                'assets/images/study-ai/1.png',
                'assets/images/study-ai/2.png',
                'assets/images/study-ai/3.png',
                'assets/images/study-ai/4.png',
                'assets/images/study-ai/5.png',
                'assets/images/study-ai/6.png',
                'assets/images/study-ai/7.png',
                'assets/images/study-ai/8.png',
                'assets/images/study-ai/9.png',
                'assets/images/study-ai/9b.png',
                'assets/images/study-ai/10.png',
                'assets/images/study-ai/11.png',
                'assets/images/study-ai/12.png'
            ]
        },
        'hubkilo': {
            title: 'HubKilo',
            description: '<p>An advanced logistics and peer-to-peer parcel delivery network (similar to an Uber for packages), connecting senders with independent transporters.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Expedition Creation:</strong> Users define parcel dimensions, weight, precise GPS locations, and value, with dynamic pricing.</li><li><strong>Real-Time Tracking:</strong> Live package monitoring with stage-by-stage push notifications and GPS guidance.</li><li><strong>QR-Code Validation:</strong> Secure, code-based delivery validation between clients and transporters.</li><li><strong>Flexible Delivery:</strong> Support for air and road transport (Vans, Trucks, Flights) with integrated pickup points.</li></ul><p><strong>Architecture:</strong> A comprehensive mobile (iOS/Android) and web ecosystem featuring complex automated actions and routing.</p>',
            tags: ['Logistics', 'Odoo', 'Tracking', 'Mobile App', 'Web App'],
            media: [
                'assets/images/hubkilo/1.png',
                'assets/images/hubkilo/1.jpg',
                'assets/images/hubkilo/1b.jpg',
                'assets/images/hubkilo/2.jpg',
                'assets/images/hubkilo/1.mp4',
                'assets/images/hubkilo/2.mp4',
                'assets/images/hubkilo/3.mp4',
                'assets/images/hubkilo/4.mp4',
                'assets/images/hubkilo/5.mp4',
                'assets/images/hubkilo/1 best.mp4'
            ]
        },
        'dga': {
            title: 'DGA Express',
            description: '<p>A high-performance travel and package management portal integrating advanced booking systems and marketplace functionalities.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Booking Systems:</strong> Streamlined management for travel and express package delivery.</li><li><strong>Customer Portal:</strong> Dedicated interfaces for client communication and tracking.</li></ul><p><strong>Architecture:</strong> Engineered with a robust Java Spring Boot backend paired with a PostgreSQL database, ensuring scalable and reliable data transactions.</p><br><a href="https://dga-express.com/" target="_blank" style="color: var(--accent-primary); text-decoration: none; font-weight: bold;"><i class="fas fa-external-link-alt"></i> Visit DGA Express Live</a><br><a href="https://github.com/temban/DGA_EXPRESS" target="_blank" style="color: var(--text-secondary); text-decoration: none; margin-top: 5px; display: inline-block;"><i class="fab fa-github"></i> View Frontend on GitHub</a>',
            tags: ['Spring Boot', 'PostgreSQL', 'Web Portal', 'Java'],
            media: [
                'assets/images/dga/1.png',
                'assets/images/dga/2.png',
                'assets/images/dga/4.png',
                'assets/images/dga/5.png',
                'assets/images/dga/6.png',
                'assets/images/dga/8.png',
                'assets/images/dga/9.png',
                'assets/images/dga/10.png',
                'assets/images/dga/11.png'
            ]
        },
        'rpn': {
            title: 'RPN',
            description: '<p>A dedicated community and contribution management platform built for Cameroonians in Canada.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Member Management:</strong> Seamless onboarding and profile management for community members.</li><li><strong>Contribution Tracking:</strong> Automated tracking of community contributions for repatriation efforts.</li><li><strong>Dynamic Balance System:</strong> Intelligent incrementing balances that enforce negative-balance deactivation and strict reactivation protocols.</li></ul><p><strong>Architecture:</strong> Developed leveraging the powerful Odoo 15 ERP framework on the backend, complemented by a performant Flutter mobile application and a PostgreSQL database.</p>',
            tags: ['Odoo 15', 'Flutter', 'PostgreSQL', 'ERP', 'Mobile App'],
            media: [
                'assets/images/rpn/1.jpg',
                'assets/images/rpn/2.jpg',
                'assets/images/rpn/3.jpg',
                'assets/images/rpn/RPN Mobile Application.mp4'
            ]
        },
        'amelia': {
            title: 'Amelia Plugin Data Sync',
            description: '<p>A custom WordPress plugin engineered to ensure robust, bidirectional database synchronization.</p><p><strong>Key Features:</strong></p><ul style="margin-left: 20px; margin-bottom: 15px;"><li><strong>Bidirectional DB Sync:</strong> Seamlessly synchronizes data in real-time across database environments.</li><li><strong>WordPress Integration:</strong> Deeply integrated into the WP architecture for seamless execution and data handling without performance bottlenecks.</li></ul><br><a href="https://github.com/temban/My_Amelia_plugin_data_sync" target="_blank" style="color: var(--text-secondary); text-decoration: none; font-weight: bold;"><i class="fab fa-github"></i> View Plugin on GitHub</a>',
            tags: ['WordPress', 'Plugin', 'PHP', 'Database Sync'],
            media: [
                'assets/images/amelia/1.jpg',
                'assets/images/amelia/2.jpg',
                'assets/images/amelia/3.jpg',
                'assets/images/amelia/4.jpg',
                'assets/images/amelia/5.jpg',
                'assets/images/amelia/6.jpg',
                'assets/images/amelia/7.jpg',
                'assets/images/amelia/8.jpg',
                'assets/images/amelia/9.jpg',
                'assets/images/amelia/10.jpg'
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

    let allProjectIds = [];
    document.querySelectorAll('.portfolio-item').forEach(item => {
        allProjectIds.push(item.getAttribute('data-project'));
        item.addEventListener('click', function () {
            openProjectModal(this.getAttribute('data-project'));
        });
    });

    const prevProjectBtn = document.getElementById('prev-project-btn');
    const nextProjectBtn = document.getElementById('next-project-btn');

    function openProjectModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;
        
        const currentIndex = allProjectIds.indexOf(projectId);
        
        // Update nav buttons
        if (prevProjectBtn) {
            if (currentIndex > 0) {
                prevProjectBtn.disabled = false;
                prevProjectBtn.onclick = (e) => { e.stopPropagation(); openProjectModal(allProjectIds[currentIndex - 1]); };
            } else {
                prevProjectBtn.disabled = true;
                prevProjectBtn.onclick = null;
            }
        }
        
        if (nextProjectBtn) {
            if (currentIndex < allProjectIds.length - 1) {
                nextProjectBtn.disabled = false;
                nextProjectBtn.onclick = (e) => { e.stopPropagation(); openProjectModal(allProjectIds[currentIndex + 1]); };
            } else {
                nextProjectBtn.disabled = true;
                nextProjectBtn.onclick = null;
            }
        }

        modalTitle.textContent = project.title;
        modalDesc.innerHTML = project.description;
        modalTags.innerHTML = '';
        project.tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.textContent = tag;
            modalTags.appendChild(tagEl);
        });
        modalGallery.innerHTML = '';
        
        const images = project.media.filter(src => !src.endsWith('.mp4'));
        const videos = project.media.filter(src => src.endsWith('.mp4'));

        if (images.length > 0) {
            const imagesRow = document.createElement('div');
            imagesRow.className = 'media-row';
            images.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                img.className = 'media-item';
                img.alt = project.title;
                img.loading = 'lazy';
                img.addEventListener('click', () => openLightbox(index, images, 'image'));
                imagesRow.appendChild(img);
            });
            modalGallery.appendChild(imagesRow);
        }

        if (videos.length > 0) {
            const videosRow = document.createElement('div');
            videosRow.className = 'media-row';
            videos.forEach((src, index) => {
                const video = document.createElement('video');
                video.src = src;
                video.className = 'media-item';
                video.muted = true;
                video.loop = true;
                video.autoplay = true;
                video.addEventListener('click', () => openLightbox(index, videos, 'video'));
                videosRow.appendChild(video);
            });
            modalGallery.appendChild(videosRow);
        }
        
        // Make sure the modal content scrolls back to top when switching projects
        const modalContentWrapper = document.querySelector('.modal-container');
        if (modalContentWrapper) {
            modalContentWrapper.scrollTop = 0;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

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

    // Lightbox Logic
    let currentLightboxIndex = 0;
    let currentLightboxArray = [];
    let currentLightboxType = 'image';

    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <button class="lightbox-nav lightbox-prev"><i class="fas fa-chevron-left"></i></button>
            <button class="lightbox-nav lightbox-next"><i class="fas fa-chevron-right"></i></button>
            <div class="lightbox-content-container"></div>
        `;
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close')) {
                lightbox.classList.remove('active');
                lightbox.querySelector('.lightbox-content-container').innerHTML = '';
            }
        });

        lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentLightboxIndex > 0) {
                openLightbox(currentLightboxIndex - 1, currentLightboxArray, currentLightboxType);
            }
        });

        lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentLightboxIndex < currentLightboxArray.length - 1) {
                openLightbox(currentLightboxIndex + 1, currentLightboxArray, currentLightboxType);
            }
        });
    }

    window.openLightbox = function(index, mediaArray, type) {
        currentLightboxIndex = index;
        currentLightboxArray = mediaArray;
        currentLightboxType = type;

        const src = mediaArray[index];
        const container = lightbox.querySelector('.lightbox-content-container');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        container.innerHTML = '';

        if (index === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
        }

        if (index === mediaArray.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'flex';
        }

        if (type === 'image') {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'lightbox-media';
            container.appendChild(img);
        } else if (type === 'video') {
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.autoplay = true;
            video.muted = true;
            video.className = 'lightbox-media';
            container.appendChild(video);
        }
        lightbox.classList.add('active');
    };
});
