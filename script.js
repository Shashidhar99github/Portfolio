function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const skillsSection = document.querySelector('#skills');
    if (isInViewport(skillsSection)) {
        skillsSection.querySelectorAll('.skill-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
        window.removeEventListener('scroll', handleScrollAnimations);
    }
}

window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations(); // Check on initial load
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you would typically send this data to a server
    // For now, we'll just log it to the console
    console.log('Form submitted:', { name, email, message });

    // Clear the form
    this.reset();

    // Show a success message (you can style this further)
    alert('Thank you for your message. I will get back to you soon!');
});
document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');
    const translations = [
        "Shashidhar", // English
        "शशिधर", // Hindi
        "ಶಶಿಧರ್", // Kannada
        "शिशिधर", // Sanskrit
        "シャシダール", // Japanese
        "沙希达尔", // Chinese
        "Шашидхар", // Russian
        "شاشيدار", // Arabic
        "샤시다르", // Korean
        "Σασιντάρ", // Greek
    ];

    let currentIndex = 0;

    function changeLanguage() {
        loadingText.textContent = translations[currentIndex];
        loadingText.classList.add('animate');
        currentIndex = (currentIndex + 1) % translations.length;
    }

    // Start changing languages
    changeLanguage();
    const intervalId = setInterval(changeLanguage, 1000); // Changed from 2000 to 1000

    // Simulate loading time (replace this with your actual loading logic)
    setTimeout(() => {
        clearInterval(intervalId);
        loadingScreen.classList.add('hide-loading');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 200); // Changed from 500 to 300
    }, 8000); // Changed from 10000 to 5000 (5 seconds loading time)
});
// Replace the setTimeout with this if you have actual content to load
window.addEventListener('load', () => {
    clearInterval(intervalId);
    loadingScreen.classList.add('hide-loading');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 300);
});
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const skillLogosContainer = document.getElementById('skill-logos-container');
  
    const skillLogos = [
      { icon: 'fab fa-html5', color: '#E34F26' },
      { icon: 'fab fa-css3-alt', color: '#1572B6' },
      { icon: 'fab fa-js-square', color: '#F7DF1E' },
      { icon: 'fab fa-react', color: '#61DAFB' },
      { icon: 'fab fa-node-js', color: '#339933' },
      { icon: 'fab fa-python', color: '#3776AB' },
      { icon: 'fab fa-java', color: '#007396' },
      { icon: 'fab fa-git-alt', color: '#F05032' },
      { icon: 'fab fa-docker', color: '#2496ED' },
      { icon: 'fab fa-aws', color: '#232F3E' },
      { icon: 'fab fa-angular', color: '#DD0031' },
      { icon: 'fab fa-vuejs', color: '#4FC08D' },
      { icon: 'fab fa-sass', color: '#CC6699' },
      { icon: 'fab fa-bootstrap', color: '#7952B3' },
      { icon: 'fab fa-php', color: '#777BB4' }
    ];
  
    function createSkillLogo(skill) {
      const logo = document.createElement('i');
      logo.className = `skill-logo ${skill.icon}`;
      logo.style.color = skill.color;
      return logo;
    }
  
    function positionLogo(logo) {
      const x = Math.random() * (window.innerWidth - 50);
      const y = Math.random() * (window.innerHeight - 50);
      logo.style.left = `${x}px`;
      logo.style.top = `${y}px`;
    }
  
    function animateLogo(logo) {
      const duration = 5 + Math.random() * 5; // 5-10 seconds
      const xDistance = Math.random() * 200 - 100; // -100px to 100px
      const yDistance = Math.random() * 200 - 100; // -100px to 100px
  
      logo.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${xDistance}px, ${yDistance}px)` }
      ], {
        duration: duration * 1000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      });
    }
  
    skillLogos.forEach(skill => {
      const logo = createSkillLogo(skill);
      positionLogo(logo);
      animateLogo(logo);
      skillLogosContainer.appendChild(logo);
    });
  
    // Simulate loading time (replace this with your actual loading logic)
    setTimeout(() => {
      loadingScreen.classList.add('hide-loading');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 5000); // 5 seconds loading time, adjust as needed
  });