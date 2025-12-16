// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling for menu items
  const menuItems = document.querySelectorAll('.menu li');
  menuItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const sections = ['h2'];
      const targetSection = document.querySelectorAll('h2')[index];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply fade-in to content sections
  const sections = document.querySelectorAll('h2, .content, .facts, .wow');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Interactive image hover effect
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    img.style.cursor = 'pointer';
    
    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });

    // Click to enlarge image
    img.addEventListener('click', function() {
      const modal = createImageModal(this.src, this.alt);
      document.body.appendChild(modal);
    });
  });

  // Create image modal function
  function createImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      cursor: pointer;
    `;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
    `;

    modal.appendChild(img);
    modal.addEventListener('click', function() {
      document.body.removeChild(modal);
    });

    return modal;
  }

  // Dynamic color change for h1
  const h1Elements = document.querySelectorAll('h1');
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
  let colorIndex = 0;

  setInterval(() => {
    h1Elements.forEach(h1 => {
      if (h1.textContent === 'This will change colors!') {
        h1.style.color = colors[colorIndex];
        h1.style.transition = 'color 1s ease';
      }
    });
    colorIndex = (colorIndex + 1) % colors.length;
  }, 2000);

  // Add click counter to achievements
  const achievements = document.querySelector('h2:nth-of-type(3)');
  let clickCount = 0;
  if (achievements && achievements.textContent === 'Achievements') {
    achievements.style.cursor = 'pointer';
    achievements.addEventListener('click', function() {
      clickCount++;
      const counter = document.getElementById('achievement-counter') || createCounter();
      counter.textContent = `Clicked ${clickCount} times! 🏆`;
    });
  }

  function createCounter() {
    const counter = document.createElement('span');
    counter.id = 'achievement-counter';
    counter.style.cssText = `
      margin-left: 10px;
      font-size: 14px;
      color: #0099cc;
      font-weight: normal;
    `;
    achievements.appendChild(counter);
    return counter;
  }

  // Animate list items on hover
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach(item => {
    if (!item.closest('.menu')) {
      item.style.transition = 'transform 0.2s ease, color 0.2s ease';
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.color = '#0099cc';
      });
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.color = 'inherit';
      });
    }
  });

  // Add typing effect to main heading
  const mainHeading = document.querySelector('body > h1');
  if (mainHeading) {
    const originalText = mainHeading.textContent;
    mainHeading.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < originalText.length) {
        mainHeading.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  }

  // Add scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(to right, #33b5e5, #0099cc);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.prepend(progressBar);

  window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPercentage + '%';
  });

  // Add interactive button for fun
  const footer = document.querySelector('.footer');
  if (footer) {
    const funButton = document.createElement('button');
    funButton.textContent = '🎉 Click for Surprise!';
    funButton.style.cssText = `
      margin-top: 10px;
      padding: 10px 20px;
      background: white;
      color: #0099cc;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.2s ease;
    `;
    
    funButton.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });
    
    funButton.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
    
    funButton.addEventListener('click', function() {
      alert('I love cats!');
    });
    
    footer.appendChild(funButton);
  }

//Crate's work (Liveshare duo)

  // Particle cursor trail effect
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleColors = ['#33b5e5', '#0099cc', '#FF6B6B', '#4ECDC4', '#FFA07A'];
  
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 5 + 2;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      this.life = 100;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.size *= 0.96;
      this.life -= 2;
    }
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.life / 100;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle(e.clientX, e.clientY));
    }
  });
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      
      if (particles[i].life <= 0) {
        particles.splice(i, 1);
      }
    }
    
    requestAnimationFrame(animate);
  }
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  console.log('🎨 Personal Profile JavaScript loaded successfully with particle effect!');
});

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}