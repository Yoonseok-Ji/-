// Video Modal Functions
function openVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    modal.classList.add('active');
    iframe.src = 'https://www.youtube.com/embed/jnHBFD0iHYY?autoplay=1';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    modal.classList.remove('active');
    iframe.src = '';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close video when clicking outside
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideo();
    }
});

// Close video with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideo();
    }
});

// Scroll Text Size Animation
function animateTextOnScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Animate section titles
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(elementCenter - windowHeight / 2);
        const maxDistance = windowHeight / 2;
        const scale = Math.max(0.8, 1 - (distanceFromCenter / maxDistance) * 0.3);
        
        title.style.transform = `scale(${scale})`;
        title.style.opacity = Math.max(0.5, 1 - (distanceFromCenter / maxDistance) * 0.5);
    });
    
    // Animate video component
    const videoComponent = document.querySelector('.video-component');
    if (videoComponent) {
        const rect = videoComponent.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(elementCenter - windowHeight / 2);
        const maxDistance = windowHeight / 2;
        const scale = Math.max(0.9, 1 - (distanceFromCenter / maxDistance) * 0.2);
        
        videoComponent.style.transform = `scale(${scale})`;
    }
    
    // Animate store cards with rotation
    const storeCards = document.querySelectorAll('.store-card');
    storeCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        
        if (isVisible) {
            const rotationAngle = Math.sin(Date.now() * 0.001 + index) * 5;
            card.style.transform = `rotateY(${rotationAngle}deg) rotateX(${rotationAngle * 0.5}deg)`;
        }
    });
}

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

// Add scroll reveal classes to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll reveal classes to different elements
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index % 3 === 0) {
            section.classList.add('scroll-reveal');
        } else if (index % 3 === 1) {
            section.classList.add('scroll-reveal-left');
        } else {
            section.classList.add('scroll-reveal-right');
        }
    });
    
    // Add to individual elements
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('scroll-reveal');
    });
    
    document.querySelectorAll('.store-card, .taste-item, .concept-item').forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('scroll-reveal-left');
        } else {
            el.classList.add('scroll-reveal-right');
        }
    });
    
    // Add continuous rotation animation to store cards
    const storeCards = document.querySelectorAll('.store-card');
    storeCards.forEach((card, index) => {
        card.style.animation = `cardRotate 8s linear infinite ${index * 0.5}s`;
    });
});

// Listen for scroll events
window.addEventListener('scroll', () => {
    revealOnScroll();
    animateTextOnScroll();
});

// Initial check
revealOnScroll();
animateTextOnScroll();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Menu tab functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active class from all menu grids
        document.querySelectorAll('.menu-grid').forEach(grid => {
            grid.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show corresponding menu grid
        const tabName = this.getAttribute('data-tab');
        const targetGrid = document.getElementById(tabName);
        if (targetGrid) {
            targetGrid.classList.add('active');
        }
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[placeholder="성함"]').value;
    const phone = this.querySelector('input[placeholder="연락처"]').value;
    const region = this.querySelector('input[placeholder="희망지역"]').value;
    
    if (name && phone && region) {
        alert(`문의가 접수되었습니다!\n성함: ${name}\n연락처: ${phone}\n희망지역: ${region}\n\n순차적으로 연락드리겠습니다.`);
        this.reset();
    } else {
        alert('모든 항목을 입력해주세요.');
    }
});

// CTA button functionality
document.querySelector('.cta-btn').addEventListener('click', function() {
    const contactBar = document.querySelector('.contact-bar');
    const offsetTop = contactBar.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Navbar background on scroll - Updated for transparent design
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Continuous card rotation animation
function startCardRotation() {
    const storeCards = document.querySelectorAll('.store-card');
    
    storeCards.forEach((card, index) => {
        let rotation = 0;
        setInterval(() => {
            rotation += 0.5;
            card.style.transform = `rotateY(${Math.sin(rotation * 0.01) * 10}deg) rotateX(${Math.cos(rotation * 0.01) * 5}deg)`;
        }, 50);
    });
}

// Start animations when page loads
document.addEventListener('DOMContentLoaded', startCardRotation);
