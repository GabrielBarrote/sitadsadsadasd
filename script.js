document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Advanced Scroll Progress indicator
    const progressBar = document.getElementById('scroll-progress');
    const updateProgress = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = progressHeight + "%";
    };
    window.addEventListener('scroll', updateProgress, { passive: true });

    // 2. Glassmorphism Navbar behavior
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // 3. Smooth scrolling for high-end feel
    document.querySelectorAll('.nav-links a, .btn-scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Advanced Parallax Effect for Hero Background
    const parallaxBg = document.querySelector('.parallax');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Move the background slightly down as the user scrolls up
        if (parallaxBg && scrolled < window.innerHeight) {
            parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    }, { passive: true });

    // 5. High-performance Intersection Observer for complex reveal animations
    const revealElements = document.querySelectorAll('.reveal-fade, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS transition
                entry.target.classList.add('in-view');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
});
