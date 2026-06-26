document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link on scroll
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

    // Project data
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

    // Modal functionality
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTags = document.getElementById('modal-tags');
    const modalGallery = document.getElementById('modal-gallery');

    // Open modal when clicking portfolio item
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];

            if (project) {
                modalTitle.textContent = project.title;
                modalDesc.textContent = project.description;
                
                // Set tags
                modalTags.innerHTML = '';
                project.tags.forEach(tag => {
                    const tagEl = document.createElement('span');
                    tagEl.textContent = tag;
                    modalTags.appendChild(tagEl);
                });

                // Set gallery
                modalGallery.innerHTML = '';
                project.images.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = project.title;
                    modalGallery.appendChild(img);
                });

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});
