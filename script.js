
        // Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            this.classList.toggle('text-blue-600');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    const menu = document.getElementById('mobile-menu');
                    menu.classList.add('hidden');
                    
                    // Remove active class from all nav links
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active-nav');
                    });
                    
                    // Add active class to clicked nav link
                    this.classList.add('active-nav');
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add shadow to navbar on scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 10) {
                nav.classList.add('shadow-lg');
                nav.classList.remove('bg-white/90');
                nav.classList.add('bg-white');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.add('bg-white/90');
                nav.classList.remove('bg-white');
            }
        });

        // Set active nav link based on scroll position
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - 150)) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active-nav');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active-nav');
                }
            });
        });

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.project-card, .card-hover, .skill-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Set initial state for animation
        document.querySelectorAll('.project-card, .card-hover, .skill-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Run animation on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);

        //carousel functionality
document.addEventListener("DOMContentLoaded", () => {
    const images = ["imgs/ELITE1.png", "imgs/ELITE2.png", "imgs/ELITE3.png", "imgs/ELITE4.png"];
    let currentIndex = 0;

    const imgElement = document.getElementById("elite-carousel");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function showImage(index) {
        imgElement.src = images[index];
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Troca automática a cada 4 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 4000);
});
