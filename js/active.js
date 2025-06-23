//MOBILE MENU TOGGLE

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const closeBtn = document.querySelector('.close-btn'); 
    const navLinks = document.querySelectorAll('nav a'); 

    // Menu toggle functionality
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active'); 
        menuToggle.classList.toggle('active'); 
    });

   
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('active'); 
            menuToggle.classList.remove('active'); 
        });
    }

  
    nav.addEventListener('click', (e) => {
       
        if (!e.target.closest('a')) {
            nav.classList.remove('active'); // 
            menuToggle.classList.remove('active'); 
        }
    });

    // Optional: Close menu when clicking on a menu link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active'); 
            menuToggle.classList.remove('active'); 
        });
    });
});


////////////////////////////////
/// SCROLL TO TOP BUTTON
const scrollUpBtn = document.getElementById('scrollUpBtn');

// Show/hide button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUpBtn.classList.add('show');
        scrollUpBtn.classList.remove('hide');
    } else {
        scrollUpBtn.classList.remove('show');
        scrollUpBtn.classList.add('hide');
    }
});

// Scroll to top when button is clicked
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



 
//SERVICES PAGE MODAL

const buttons = document.querySelectorAll('.read-more-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-modal');
        document.getElementById(target).style.display = 'flex';
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.parentElement.style.display = 'none';
      });
    });

    window.addEventListener('click', e => {
      modals.forEach(modal => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });


     // Math Captcha Script
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const answer = num1 + num2;
    document.getElementById("math-question").innerText = `What is the sum of ${num1} + ${num2}?`;
    document.getElementById("captcha-answer").value = answer;