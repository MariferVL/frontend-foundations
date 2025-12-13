
$(document).ready(function () {

    /**
     * Handle smooth scrolling when navigation links are clicked
     * Updates active state and scrolls to target section
     */
    $('.nav-link').on('click', function (e) {
        const href = $(this).attr('href');

        // Only handle anchor links 
        if (href.startsWith('#')) {
            e.preventDefault();

            const target = $(href);
            if (target.length) {
                // Calculate offset to account for fixed navbar
                const navHeight = $('.navbar').outerHeight();
                const targetPosition = target.offset().top - navHeight;

                // Smooth scroll to target
                $('html, body').animate({
                    scrollTop: targetPosition
                }, 800);

                // Update active class
                $('.nav-link').removeClass('active');
                $(this).addClass('active');

                // Close mobile menu if open
                $('.navbar-collapse').collapse('hide');
            }
        }
    });

    /**
     * Show and hide scroll-to-top button based on scroll position
     * Smooth scroll to top when clicked
     */
    const $scrollTopBtn = $('#scrollTop');

    // Show and hide button on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $scrollTopBtn.addClass('visible');
        } else {
            $scrollTopBtn.removeClass('visible');
        }

        // Update active nav link based on scroll position
        updateActiveNav();
    });

    // Scroll to top when button is clicked
    $scrollTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    /**
     * Add click interaction to skill tags
     * Shows alert with skill name 
     */
    $('.skill-tag').on('click', function () {
        const skillName = $(this).text();

        // Add pulse animation
        $(this).css('animation', 'pulse 0.5s');

        // Remove animation after it completes
        setTimeout(() => {
            $(this).css('animation', '');
        }, 500);

        // Log skill click 
        console.log(`Skill clicked: ${skillName}`);

    });

    // Email validation
    $('#contactEmail').on('change', function () {
        const email = $(this).val();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const feedback = $('#emailFeedback');

        if (isValid) {
            feedback.text('✓ Email válido')
                .removeClass('text-error-cyber')
                .addClass('text-success-cyber');
        } else if (email) {
            feedback.text('✗ Email inválido')
                .removeClass('text-success-cyber')
                .addClass('text-error-cyber');
        } else {
            feedback.text('')
                .removeClass('text-success-cyber text-error-cyber');
        }
    });

    /**
     * Update active navigation link based on current scroll position
     * Highlights the nav item corresponding to visible section
     */
    function updateActiveNav() {
        const scrollPos = $(window).scrollTop();
        const navHeight = $('.navbar').outerHeight();

        $('section').each(function () {
            const section = $(this);
            const sectionTop = section.offset().top - navHeight - 100;
            const sectionBottom = sectionTop + section.outerHeight();
            const sectionId = section.attr('id');

            // Check if current scroll position is within this section
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${sectionId}"]`).addClass('active');
            }
        });
    }


    /**
     * Add fade-in animation to cards when they enter viewport
     * Enhances user experience with progressive disclosure
     */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all cards
    document.querySelectorAll('.cyber-card').forEach(card => {
        observer.observe(card);
    });

    /**
     * Handle keyboard navigation for skill tags
     * Allow Enter key to trigger click event
     */
    $('.skill-tag').on('keypress', function (e) {
        if (e.which === 13) { // Enter key
            $(this).click();
        }
    });

    /**
     * Initialize active nav state on page load
     */
    updateActiveNav();

    console.log('CV Interactive loaded successfully!');
});
