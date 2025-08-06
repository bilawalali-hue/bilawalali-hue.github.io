 document.addEventListener("DOMContentLoaded", () => {
      const navbar = document.getElementById("smart-navbar");
      const heroSection = document.querySelector(".hero-overlay");
      
      function updateNavbarPosition() {
        const heroBottom = heroSection.offsetHeight;
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        if (scrollPosition > heroBottom - 50) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
      
      // Initial check
      updateNavbarPosition();
      
      // Listeners
      window.addEventListener("scroll", updateNavbarPosition);
      window.addEventListener("resize", updateNavbarPosition);
    });

// SKILLS SECTION
 const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.disconnect(); // Run only once
        }
      });
    }, { threshold: 0.3 });

    observer.observe(document.getElementById("skills-section"));

    function animateSkills() {
      document.querySelectorAll('.skill').forEach(skill => {
        const percent = parseInt(skill.getAttribute('data-percent'));
        const inner = skill.querySelector('.inner');
        const outer = skill.querySelector('.outer');
        let current = 0;

        const interval = setInterval(() => {
          if (current >= percent) {
            clearInterval(interval);
          } else {
            current++;
            inner.textContent = current + '%';
            outer.style.background = `conic-gradient(#000 ${current * 3.6}deg, #e0e0e0 0deg)`;
          }
        }, 15);
      });
    }
// more skills section
  document.addEventListener("DOMContentLoaded", () => {
    const barClasses = [
      "creative-bar",
      "leadership-bar",
      "communication-bar",
      "english-bar",
      "spanish-bar",
      "indonesia-bar"
    ];

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const value = bar.getAttribute("data-progress");

          const fill = document.createElement("div");
          fill.style.height = "100%";
          fill.style.width = "0";
          fill.style.backgroundColor = "black";
          fill.style.borderRadius = "5px";
          fill.style.transition = "width 2s ease";

          bar.appendChild(fill);

          setTimeout(() => {
            fill.style.width = value;
          }, 100);

          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    // Observe each specific class
    barClasses.forEach(cls => {
      const bar = document.querySelector(`.${cls}`);
      if (bar) observer.observe(bar);
    });
  });
  // EMPLYMENT ANIMATION
  document.addEventListener("DOMContentLoaded", () => {
    const entries = document.querySelectorAll(".creative-entry");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, {
      threshold: 0.2
    });

    entries.forEach(entry => observer.observe(entry));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const employmentEntries = document.querySelectorAll(".creative-entry");
    const eduEntries = document.querySelectorAll(".edu-entry");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, {
      threshold: 0.2
    });

    employmentEntries.forEach(entry => observer.observe(entry));
    eduEntries.forEach(entry => observer.observe(entry));
  });

// SKILLS ANIMATION
  document.addEventListener("DOMContentLoaded", () => {
    const allSkills = document.querySelectorAll(".skill");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Optional: stagger delay
          entry.target.style.transitionDelay = `${index * 100}ms`;
        }
      });
    }, {
      threshold: 0.1
    });

    allSkills.forEach(skill => observer.observe(skill));
  });



  

